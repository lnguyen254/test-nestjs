import { IsEmail, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FullNameDto } from '../../user/dto/fullname.user.dto';

export class RegisterDto {
  @ValidateNested()
  @Type(() => FullNameDto)
  fullName: FullNameDto;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
