import { IsEmail, IsString, MinLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { FullNameDto } from './fullname.user.dto';

export class CreateUserDto {
  @ValidateNested()
  @Type(() => FullNameDto)
  fullName: FullNameDto;

  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}
