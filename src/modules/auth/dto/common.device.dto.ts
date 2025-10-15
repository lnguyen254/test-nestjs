import { IsDate, IsString } from 'class-validator';
import { Types } from 'mongoose';
import { IUserAgentParser } from '../../../common/interface/user-agent-parser.interface';

export class CommonDeviceDto {
  @IsString()
  ipAddress?: string;

  @IsString()
  userAgent?: string;

  @IsString()
  deviceType?: string;

  @IsString()
  os?: string;

  @IsString()
  browser?: string;

  @IsDate()
  lastLoginAt?: Date;

  @IsString()
  userId?: Types.ObjectId;

  constructor(partial: Partial<IUserAgentParser>) {
    Object.assign(this, partial);
  }
}
