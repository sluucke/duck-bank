import { describe, expect, it } from 'vitest';
import { User } from '../entities/user';
import { CryptoProvider } from '../providers/encrypt/crypto/Crypto';
import { InMemoryUserRepository } from '../repositories/InMemory/InMemoryUserRepository';
import { CreateUser } from './CreateUser';

const inMemoryUserRepository = new InMemoryUserRepository();
const encryptProvider = new CryptoProvider();

describe('Create User', () => {
  it('should be able to create an user', async () => {
    const createUserUseCase = new CreateUser(
      inMemoryUserRepository,
      encryptProvider,
    );

    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'password',
    });

    expect(user).instanceOf(User);
  });

  it('not should be able to create an user with same e-mail address', () => {
    const createUserUseCase = new CreateUser(
      inMemoryUserRepository,
      encryptProvider,
    );

    expect(
      createUserUseCase.execute({
        name: 'John Doe',
        email: 'johndoe@email.com',
        password: 'password',
      }),
    ).rejects.toBeInstanceOf(Error);
  });
});
