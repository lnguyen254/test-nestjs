import { User, UserDocument } from '../schemas/user.schema';

export abstract class UserRepository {
  abstract findAll(): Promise<UserDocument[]>;
  abstract findById(userId: string): Promise<UserDocument | null>;
  abstract findByEmail(email: string): Promise<UserDocument | null>;
  abstract create(user: Partial<User>): Promise<UserDocument>;
  abstract update(user: Partial<User>): Promise<UserDocument>;
  abstract delete(userId: string): Promise<boolean>;
}
