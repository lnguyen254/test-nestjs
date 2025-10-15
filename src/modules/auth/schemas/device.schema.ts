import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type DeviceDocument = HydratedDocument<Device>;

@Schema({ timestamps: true })
export class Device {
  @Prop()
  ipAddress?: string;

  @Prop()
  userAgent?: string;

  @Prop()
  deviceType?: string; // mobile, desktop, tablet

  @Prop()
  os?: string;

  @Prop()
  browser?: string;

  @Prop({ default: Date.now() })
  lastLoginAt: Date;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  userId: Types.ObjectId;
}
export const DeviceSchema = SchemaFactory.createForClass(Device);
