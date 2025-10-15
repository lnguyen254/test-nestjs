import {
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { FullNameDto } from './fullname.user.dto';

export class UpdateUserDto {
  @ValidateNested()
  @Type(() => FullNameDto)
  fullName: FullNameDto;

  @IsString()
  @IsOptional()
  @MinLength(6)
  password: string;
}
