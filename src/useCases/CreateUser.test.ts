import { describe, expect, it } from 'vitest';
import { UuidProvider } from '../providers/identifier/uuid/UuidProvider';
import { CryptoProvider } from '../providers/encrypt/crypto/Crypto';
import { InMemoryUserRepository } from '../repositories/InMemory/InMemoryUserRepository';
import { CreateUser } from './CreateUser';

const inMemoryUserRepository = new InMemoryUserRepository();
const encryptProvider = new CryptoProvider();
const identifierProvider = new UuidProvider();

describe('Create User', () => {
  it('should be able to create an user', async () => {
    const createUserUseCase = new CreateUser(
      inMemoryUserRepository,
      encryptProvider,
      identifierProvider,
    );

    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: 'password',
    });

    expect(user).toHaveProperty('id');
  });

  it('not should be able to create an user with same e-mail address', () => {
    const createUserUseCase = new CreateUser(
      inMemoryUserRepository,
      encryptProvider,
      identifierProvider,
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
