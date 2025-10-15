import { ResponseUserDto } from '../../user/dto/response.user.dto';

export class ResponseLoginDto {
  user: ResponseUserDto;
  token: {
    accessToken?: string;
    refreshToken?: string;
  };
}
