import { UserDocument } from '../schemas/user.schema';
import { BaseRepository } from '../../../common/repository/base.repository';

export abstract class UserRepository extends BaseRepository<UserDocument> {
  abstract findByEmail(email: string): Promise<UserDocument | null>;
}
