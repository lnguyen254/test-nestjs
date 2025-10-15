import { ResponseUserDto } from '../user/dto/response.user.dto';

export class ResponseLoginDto {
  user: ResponseUserDto;
  accessToken?: string;
  refreshToken?: string;
}
