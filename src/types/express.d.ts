import { IPayload } from '../modules/auth/interface/payload.interface';

declare global {
  namespace Express {
    export interface Request {
      data?: IPayload;
    }
  }
}
