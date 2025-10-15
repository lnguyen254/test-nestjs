import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UserDocument } from './schemas/user.schema';
import { CreateUserDto } from './dto/create.user.dto';
import { ResponseUserDto } from './dto/response.user.dto';
import { BcryptUtils } from '../../common/utils/bcrypt.util';
import { UpdateUserDto } from './dto/update.user.dto';
import { UserRepository } from './repository/user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUsers(): Promise<ResponseUserDto[]> {
    const users = await this.userRepository.findAll();
    return users.map((user) => new ResponseUserDto(user.toObject()));
  }

  async getUserById(id: string): Promise<ResponseUserDto> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new NotFoundException();
    }

    return new ResponseUserDto(user.toObject());
  }

  async createUser(createUserDto: CreateUserDto): Promise<ResponseUserDto> {
    const user: UserDocument | null = await this.userRepository.findByEmail(
      createUserDto.email,
    );
    if (user) {
      throw new BadRequestException('Existed email!');
    }

    // Hash password
    createUserDto.password = await BcryptUtils.hash(createUserDto.password);

    return new ResponseUserDto(
      (await this.userRepository.create(createUserDto)).toObject(),
    );
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<ResponseUserDto> {
    // Check password
    if (updateUserDto.password) {
      updateUserDto.password = await BcryptUtils.hash(updateUserDto.password);
    }

    const user = await this.userRepository.update(id, updateUserDto);
    if (!user) {
      throw new BadRequestException('User not found!');
    }

    return new ResponseUserDto(user.toObject());
  }

  // Auth service
  async getUserByEmail(email: string): Promise<UserDocument> {
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new NotFoundException();
    }

    return user;
  }
}
