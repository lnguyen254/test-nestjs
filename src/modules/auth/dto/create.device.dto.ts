import { Types } from 'mongoose';

export class CreateDeviceDto {
  userId: Types.ObjectId;
  ipAddress?: string;
  userAgent?: string;
  deviceType?: string; // mobile, desktop, tablet
  os?: string;
  browser?: string;
  lastLoginAt?: Date;
}
