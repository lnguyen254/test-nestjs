import { BaseRepository } from '../../../common/repository/base.repository';
import { DeviceDocument } from '../schemas/device.schema';
import { Types } from 'mongoose';

export abstract class DeviceRepository extends BaseRepository<DeviceDocument> {
  abstract findByUserIdAndIpAddress(
    userId: Types.ObjectId,
    ipAddress: string,
  ): Promise<DeviceDocument | null>;
}
