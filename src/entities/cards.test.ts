import { expect, test } from 'vitest';
import { UserMockTest } from '../tests/mock/UserMock';
import { Cards } from './cards';
import { User } from './user';

test('should create a new card', () => {
  const user: User = UserMockTest();

  const card: Cards = new Cards({
    id: 1,
    card_number: '12321431',
    security_number: '123',
    owner: user,
    password: '121212',
    generatedAt: new Date(),
    expiresAt: new Date(),
  });

  expect(card).instanceOf(Cards);
});
