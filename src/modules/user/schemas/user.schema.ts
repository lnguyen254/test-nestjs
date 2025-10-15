import { HydratedDocument } from 'mongoose';
import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';

interface IFullName {
  firstName: string;
  lastName: string;
}

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop(
    raw({
      firstName: { type: String },
      lastName: { type: String },
    }),
  )
  fullName: IFullName;

  @Prop({ type: String, required: true, unique: true, index: true })
  email: string;

  @Prop()
  password: string;
}
export const UserSchema = SchemaFactory.createForClass(User);
