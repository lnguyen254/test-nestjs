export class CreateDeviceDto {
  ipAddress?: string;
  userAgent?: string;
  deviceType?: string; // mobile, desktop, tablet
  os?: string;
  browser?: string;
  lastLoginAt?: Date;
}
