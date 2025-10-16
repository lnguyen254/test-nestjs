import { IsEmail, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FullNameDto } from '../../user/dto/fullname.user.dto';
import { ERROR_CONSTANT } from '../../../common/constants/error.constant';

export class RegisterDto {
  @ValidateNested()
  @Type(() => FullNameDto)
  fullName: FullNameDto;

  @IsEmail(
    {},
    {
      message: ERROR_CONSTANT.ERR_VALIDATION_EMAIL[2],
    },
  )
  email: string;

  @IsString()
  @MinLength(6, { message: 'VALERR02:Weak password' })
  password: string;
}
