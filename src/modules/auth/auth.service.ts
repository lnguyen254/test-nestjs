import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { LoginDto } from './dto/login.dto';
import { BcryptUtils } from '../../common/utils/bcrypt.util';
import { UserAgentParserUtil } from '../../common/utils/user-agent-parser.util';
import { UserRepository } from '../user/repository/user.repository';
import { TokenRepository } from './repository/token.repository';
import { DeviceRepository } from './repository/device.repository';
import { CommonDeviceDto } from './dto/common.device.dto';
import { Types } from 'mongoose';
import { ResponseUserDto } from '../user/dto/response.user.dto';
import { RegisterDto } from './dto/register.dto';
import { ResponseLoginDto } from './dto/response.login.dto';

@Injectable()
export class AuthService {
  constructor(
    private tokenRepository: TokenRepository,
    private deviceRepository: DeviceRepository,
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}

  private generateAccessToken(userId: string, email: string): Promise<string> {
    return this.jwtService.signAsync({ _id: userId, email });
  }

  /* Login
   * 1. Check username & password (loginDto)
   * 2. Check device (req - express.Request) --> Find device by userId and ipAddress
   *   2.1. Existed --> update lastLoginAt --> check token with deviceId --> update revoked = true in old refresh-token
   *   2.2. No existed --> create a new device
   * 3. Create a new refresh-token with the device (7d)
   * 4. Create a new access-token (1h)
   *  */
  async login(req: Request, loginDto: LoginDto): Promise<ResponseLoginDto> {
    /* Check username & password */
    const user = await this.userRepository.findByEmail(loginDto.email);
    if (!user) {
      throw new UnauthorizedException();
    }

    const isValidPassword = await BcryptUtils.compare(
      loginDto.password,
      user.password,
    );
    if (!isValidPassword) {
      throw new UnauthorizedException();
    }

    /* Check device */
    const reqDevice = UserAgentParserUtil.parse(req);
    const device = await this.deviceRepository.findByUserIdAndIpAddress(
      new Types.ObjectId(user._id.toString()),
      reqDevice.ipAddress,
    );

    let deviceId: Types.ObjectId;
    if (device) {
      // 2.1
      await this.deviceRepository.update(device._id.toString(), {
        lastLoginAt: new Date(),
      });

      // const token = await this.tokenRepository.findNotRevokedByDeviceId(
      //   device._id,
      // );
      const tokens = await this.tokenRepository.findNotRevokedByDeviceId_v1(
        device._id,
      );

      if (tokens[0]) {
        await this.tokenRepository.update(tokens[0]._id.toString(), {
          revoked: true,
        });
      }

      deviceId = device._id;
    } else {
      // 2.2
      const newDeviceDto = new CommonDeviceDto(reqDevice);
      newDeviceDto.userId = user._id;
      const newDevice = await this.deviceRepository.create(newDeviceDto);

      deviceId = newDevice._id;
    }

    /* Create a refresh-token */
    const rfToken = uuidv4();
    const hashedRfToken = await BcryptUtils.hash(rfToken);

    await this.tokenRepository.create({
      token: hashedRfToken,
      userId: user._id,
      deviceId,
    });

    /* Create an access token (userId, deviceId, email) */
    const accessToken = await this.jwtService.signAsync({
      userId: user._id.toString(),
      deviceId: deviceId.toString(),
      email: user.email,
    });

    return {
      user: new ResponseUserDto(user.toObject()),
      token: {
        accessToken,
        refreshToken: hashedRfToken,
      },
    };
  }

  async register(registerDto: RegisterDto): Promise<ResponseUserDto> {
    const existedUser = await this.userRepository.findByEmail(
      registerDto.email,
    );
    if (existedUser) {
      throw new ConflictException();
    }

    const user = await this.userRepository.create(registerDto);
    return new ResponseUserDto(user.toObject());
  }

  /* Logout
   * 1. Find token by deviceId in access_token
   * 2. Update the revoked -> true
   *  */
  async logout(req: Request): Promise<any> {
    const data = req.data;
    if (!data) {
      throw new UnauthorizedException();
    }

    const tokens = await this.tokenRepository.findNotRevokedByDeviceId_v1(
      new Types.ObjectId(data.deviceId),
    );
    if (!tokens[0]) {
      throw new InternalServerErrorException();
    }

    await this.tokenRepository.update(tokens[0]._id.toString(), {
      revoked: true,
    });

    return true;
  }
}
