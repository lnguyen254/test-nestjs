import { IsOptional, IsString } from 'class-validator';

export class FullNameDto {
  @IsString()
  @IsOptional()
  firstName: string;

  @IsString()
  @IsOptional()
  lastName: string;
}
