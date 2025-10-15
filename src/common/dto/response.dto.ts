export class ResponseDto<T> {
  data?: T;
  status: number = 200;
  errorCode?: string;
  message: string = 'Success';
  timestamp?: string;
  path?: string;

  constructor(partial: Partial<ResponseDto<T>>) {
    Object.assign(this, partial);
  }
}
