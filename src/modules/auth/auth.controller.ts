import {
  Body,
  ConflictException,
  Controller,
  Get,
  Post,
  Req,
  Request,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import express from 'express';
import { Public } from '../../common/decorators/public.decorator';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResponseLoginDto } from './dto/response.login.dto';
import { ResponseUserDto } from '../user/dto/response.user.dto';

@Public()
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(
    @Req() req: express.Request,
    @Body() loginDto: LoginDto,
  ): Promise<ResponseLoginDto> {
    return this.authService.login(req, loginDto);
  }

  @Get('login')
  async getLogin(@Request() req: express.Request): Promise<ResponseLoginDto> {
    const loginDto = new LoginDto();
    loginDto.email = 'Kip_Labadie7@yahoo.com';
    loginDto.password = '123456';
    return await this.authService.login(req, loginDto);
  }

  @Post('register')
  async register(@Body() registerDto: RegisterDto): Promise<ResponseUserDto> {
    return await this.authService.register(registerDto);
  }

  // @Get()
  // testGuard(@Request() req: express.Request): any {
  //   return req.user;
  // }

  @Get('error')
  testError(): any {
    throw new ConflictException();
  }
}
