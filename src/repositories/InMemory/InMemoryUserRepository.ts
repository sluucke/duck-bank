import { User } from '@/entities/user';
import { UserRepository } from '../UserRepository';

export class InMemoryUserRepository implements UserRepository {
  public users: User[] = [];

  async create(user: User): Promise<User> {
    this.users.push(user);

    return user;
  }

  async update(id: string, user: User): Promise<User> {
    const userExists = this.users.findIndex((u) => u.id === id);

    if (userExists > -1) {
      this.users[userExists] = user;

      return user;
    } else {
      throw new Error('User not found');
    }
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((u) => u.id === id);

    return user ?? null;
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email);

    return user ?? null;
  }

  /**
   * auto inrement id
   * @returns {string}
   */
  async getNextId(): Promise<string> {
    return this.users.length.toString();
  }
}
