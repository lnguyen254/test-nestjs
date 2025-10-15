import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from './guard/auth.guard';
import { MongooseModule } from '@nestjs/mongoose';
import { Device, DeviceSchema } from './schemas/device.schema';
import { Token, TokenSchema } from './schemas/token.schema';
import { TokenRepositoryImpl } from './repository/impl/token.repository.impl';
import { DeviceRepositoryImpl } from './repository/impl/device.repository.impl';
import { TokenRepository } from './repository/token.repository';
import { DeviceRepository } from './repository/device.repository';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Device.name, schema: DeviceSchema },
      { name: Token.name, schema: TokenSchema },
    ]),
    JwtModule.register({
      global: true,
      secret: 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
    UserModule,
  ],
  providers: [
    {
      provide: TokenRepository,
      useClass: TokenRepositoryImpl,
    },
    { provide: DeviceRepository, useClass: DeviceRepositoryImpl },
    AuthService,
    {
      provide: 'APP_GUARD',
      useClass: AuthGuard,
    },
  ],
  controllers: [AuthController],
})
export class AuthModule {}
