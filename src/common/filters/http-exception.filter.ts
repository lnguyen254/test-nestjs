import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ResponseDto } from '../dto/response.dto';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    const status = exception.getStatus() || HttpStatus.INTERNAL_SERVER_ERROR;
    const eR = exception.getResponse() as Record<string, any>;

    // Because of validation exception --> message can be a string or string[] (eR.message)
    const message: string | string[] =
      eR.message || exception.message || 'Internal Server Error';

    const errResponse = new ResponseDto({
      status,
      message,
      errorCode: eR.code as string,
      timestamp: new Date().toISOString(),
      path: req.url,
    });

    res.status(status).json(errResponse);
  }
}
