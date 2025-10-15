import { TokenDocument } from '../schemas/token.schema';
import { BaseRepository } from '../../../common/repository/base.repository';
import { Types } from 'mongoose';

export abstract class TokenRepository extends BaseRepository<TokenDocument> {
  abstract findByDeviceId(
    deviceId: Types.ObjectId,
  ): Promise<TokenDocument | null>;

  abstract findNotRevokedByDeviceId(
    deviceId: Types.ObjectId,
  ): Promise<TokenDocument | null>;

  // Avoid many same deviceId have revoked status is false
  abstract findNotRevokedByDeviceId_v1(
    deviceId: Types.ObjectId,
  ): Promise<TokenDocument[]>;
}
