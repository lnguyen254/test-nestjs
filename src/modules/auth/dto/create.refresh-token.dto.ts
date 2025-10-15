import { Types } from 'mongoose';

export class CreateRefreshTokenDto {
  userId: Types.ObjectId;
  deviceId?: Types.ObjectId;
  refreshToken: string;
}
