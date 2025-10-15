import { Exclude, Expose, Transform } from 'class-transformer';
import { Types } from 'mongoose';

@Exclude()
export class BaseDto<T> {
  @Expose()
  @Transform(({ value }): any =>
    value instanceof Types.ObjectId ? value.toString() : value,
  )
  _id: Types.ObjectId | string;

  @Expose()
  @Transform(({ value }): any => (value ? new Date(value).toISOString() : null))
  createdAt?: Date | string;

  @Expose()
  @Transform(({ value }): any => (value ? new Date(value).toISOString() : null))
  updatedAt?: Date | string;

  __v: number;

  constructor(partial: Partial<T>) {
    Object.assign(this, partial);
  }
}
