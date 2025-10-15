/*
 * T: Schema Document
 * */
export abstract class BaseRepository<T> {
  abstract findAll(): Promise<T[]>;
  abstract findById(id: string): Promise<T | null>;
  abstract create(e: Partial<T>): Promise<T>;
  abstract update(id: string, e: Partial<T>): Promise<T | null>;
  abstract delete(id: string): Promise<boolean>;
}
