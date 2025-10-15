import { IsBoolean, IsDate, IsString } from 'class-validator';

export class CommonTokenDto {
  @IsString()
  token?: string;

  @IsDate()
  expiredAt?: Date;

  @IsBoolean()
  revoked?: boolean;

  @IsString()
  userId?: string;

  @IsString()
  deviceId?: string;
}
