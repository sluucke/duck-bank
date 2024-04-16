import { User } from '../entities/user';
import { UserRepository } from '@/repositories/UserRepository';
import { EncryptProvider } from '@/providers/encrypt/EncryptProvider';
import { IdentifierProvider } from '@/providers/identifier/IdentifierProvider';

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  constructor(
    private userRepository: UserRepository,
    private encryptProvider: EncryptProvider,
    private idProvider: IdentifierProvider,
  ) {}

  async execute({ name, email, password }: CreateUserRequest) {
    if (await this.userRepository.findByEmail(email)) {
      throw new Error('User already exists');
    }

    const user = new User({
      id: this.idProvider.generate(),
      name,
      email,
      password: await this.encryptProvider.hash(password),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return this.userRepository.create(user);
  }
}
