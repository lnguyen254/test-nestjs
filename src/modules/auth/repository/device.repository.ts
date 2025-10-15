import { BaseRepository } from '../../../common/repository/base.repository';
import { DeviceDocument } from '../schemas/device.schema';

export abstract class DeviceV2Repository extends BaseRepository<DeviceDocument> {
  abstract findByUserIdAndIpAddress(
    userId: string,
    ipAddress: string,
  ): Promise<DeviceDocument | null>;
}
