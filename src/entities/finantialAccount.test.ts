import { expect, test } from 'vitest';
import { UserMockTest } from '../tests/mock/UserMock';
import { FinantialAccount } from './finantialAccount';
import { User } from './user';

test('should create a finantial account', () => {
  const user: User = UserMockTest();

  const account: FinantialAccount = new FinantialAccount({
    id: 1,
    pin: '12345744',
    user,
    balance: 0,
    isActive: true,
    createdAt: new Date().toISOString(),
  });

  expect(account).instanceOf(FinantialAccount);
});
