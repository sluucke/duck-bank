import { User } from '../entities/user';

export interface UserRepository {
  create(user: User): Promise<User>;
  update(id: string, user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  getNextId(): Promise<string>;
}
