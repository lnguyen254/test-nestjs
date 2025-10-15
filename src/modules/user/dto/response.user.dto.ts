import { Exclude, Expose } from 'class-transformer';
import { BaseDto } from '../../../common/dto/base.dto';
import { FullNameDto } from './fullname.user.dto';

@Exclude()
export class ResponseUserDto extends BaseDto<ResponseUserDto> {
  @Expose()
  fullName: FullNameDto;

  @Expose()
  email: string;

  password: string;

  constructor(partial: Partial<ResponseUserDto>) {
    super(partial);
    Object.assign(this, partial);
  }
}
