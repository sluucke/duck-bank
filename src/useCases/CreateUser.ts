import { User } from "../entities/user";
import { UserRepository } from "../repositories/UserRepository";
import { uuid } from "uuidv4";
import { EncryptProvider } from "../providers/encrypt/EncryptProvider";

interface CreateUserRequest {
  name: string;
  email: string;
  password: string;
}

export class CreateUser {
  constructor(
    private userRepository: UserRepository,
    private encryptProvider: EncryptProvider
  ) {}

  async execute({ name, email, password }: CreateUserRequest) {
    if (await this.userRepository.findByEmail(email)) {
      throw new Error("User already exists");
    }

    const user = new User({
      id: uuid(),
      name,
      email,
      password: await this.encryptProvider.hash(password),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return this.userRepository.create(user);
  }
}
