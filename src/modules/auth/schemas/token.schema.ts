import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type RefreshTokenDocument = HydratedDocument<RefreshToken>;

@Schema({ timestamps: true })
export class RefreshToken {
  @Prop({ required: true })
  refreshToken: string;

  @Prop({
    required: true,
    default: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
  })
  expiredAt: Date;

  @Prop({ required: true, default: false }) // revoke token when user logs out
  revoked: boolean;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Device' })
  deviceId: Types.ObjectId;
}
export const RefreshTokenSchema = SchemaFactory.createForClass(RefreshToken);
