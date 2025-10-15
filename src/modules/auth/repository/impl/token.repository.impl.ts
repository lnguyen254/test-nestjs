import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Token, TokenDocument } from '../../schemas/token.schema';
import { TokenRepository } from '../token.repository';

@Injectable()
export class TokenRepositoryImpl implements TokenRepository {
  constructor(
    @InjectModel(Token.name) private readonly tokenModel: Model<TokenDocument>,
  ) {}
  findNotRevokedByDeviceId(
    deviceId: Types.ObjectId,
  ): Promise<TokenDocument | null> {
    return this.tokenModel.findOne({ deviceId, revoked: false }).exec();
  }

  findNotRevokedByDeviceId_v1(
    deviceId: Types.ObjectId,
  ): Promise<TokenDocument[]> {
    return this.tokenModel
      .find({ deviceId, revoked: false })
      .sort({ expiredAt: -1 })
      .limit(1)
      .exec();
  }

  findByDeviceId(deviceId: Types.ObjectId): Promise<TokenDocument | null> {
    return this.tokenModel.findOne({ deviceId }).exec();
  }

  findAll(): Promise<
    (Document<unknown, {}, Token, {}, {}> &
      Token & { _id: Types.ObjectId } & { __v: number })[]
  > {
    throw new Error('Method not implemented.');
  }

  findById(
    id: string,
  ): Promise<
    | (Document<unknown, {}, Token, {}, {}> &
        Token & { _id: Types.ObjectId } & { __v: number })
    | null
  > {
    throw new Error('Method not implemented.');
  }

  create(token: Partial<TokenDocument>): Promise<TokenDocument> {
    const newToken = new this.tokenModel(token);
    return newToken.save();
  }

  update(
    id: string,
    token: Partial<TokenDocument>,
  ): Promise<TokenDocument | null> {
    return this.tokenModel
      .findByIdAndUpdate(id, token, { new: true, upsert: false })
      .exec();
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
