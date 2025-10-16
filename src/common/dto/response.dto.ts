export class ResponseDto<T> {
  data?: T;
  status: number = 200;
  errorCode?: string | string[];
  message?: string | string[];
  timestamp?: string;
  path?: string;

  constructor(partial: Partial<ResponseDto<T>>) {
    Object.assign(this, partial);
  }
}
