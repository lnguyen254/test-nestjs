import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type TokenDocument = HydratedDocument<Token>;

@Schema({ timestamps: true })
export class Token {
  @Prop({ required: true })
  token: string; // uuid_v4()

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

export const TokenSchema = SchemaFactory.createForClass(Token);
