import * as bcrypt from 'bcrypt';

export class BcryptUtils {
  static async hash(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  static async compare(
    plainString: string,
    hashedString: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainString, hashedString);
  }
}
