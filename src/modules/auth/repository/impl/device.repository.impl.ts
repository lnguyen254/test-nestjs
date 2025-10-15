import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Device, DeviceDocument } from '../../schemas/device.schema';
import { DeviceRepository } from '../device.repository';

@Injectable()
export class DeviceRepositoryImpl implements DeviceRepository {
  constructor(
    @InjectModel(Device.name)
    private readonly deviceModel: Model<DeviceDocument>,
  ) {}

  findByUserIdAndIpAddress(
    userId: Types.ObjectId,
    ipAddress: string,
  ): Promise<DeviceDocument | null> {
    return this.deviceModel.findOne({ userId, ipAddress }).exec();
  }

  findAll(): Promise<
    (Document<unknown, object, Device, object> &
      Device & { _id: Types.ObjectId } & { __v: number })[]
  > {
    throw new Error('Method not implemented.');
  }

  findById(
    id: string,
  ): Promise<
    | (Document<unknown, object, Device, object> &
        Device & { _id: Types.ObjectId } & { __v: number })
    | null
  > {
    throw new Error('Method not implemented.');
  }

  create(device: Partial<DeviceDocument>): Promise<DeviceDocument> {
    const newDevice = new this.deviceModel(device);
    return newDevice.save();
  }

  update(
    id: string,
    device: Partial<DeviceDocument>,
  ): Promise<DeviceDocument | null> {
    return this.deviceModel
      .findByIdAndUpdate(id, device, { new: true, upsert: false })
      .exec();
  }

  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
