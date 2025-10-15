import { Exclude, Expose } from 'class-transformer';
import { BaseDto } from '../../../common/dto/base.dto';

@Exclude()
export class ResponseDeviceDto extends BaseDto<ResponseDeviceDto> {
  @Expose()
  ipAddress: string;

  @Expose()
  userAgent?: string;

  @Expose()
  deviceType?: string;

  @Expose()
  os?: string;

  @Expose()
  browser?: string;

  @Expose()
  lastLoginAt: Date;

  @Expose()
  userId: string;

  constructor(partial: Partial<ResponseDeviceDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
