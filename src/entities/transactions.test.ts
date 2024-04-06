import { expect, test } from "vitest";
import { UserMockTest } from "../tests/mock/UserMock";
import { FinantialAccount } from "./finantialAccount";
import { Transactions } from "./transactions";
import { User } from "./user";

test("should transfer money", () => {
  const user: User = UserMockTest();

  const account: FinantialAccount = new FinantialAccount({
    id: 1,
    pin: "12345744",
    user: user,
    balance: 0,
    isActive: true,
    createdAt: new Date().toISOString(),
  });

  const transaction: Transactions = new Transactions({
    id: 1,
    from: user,
    amount: 150.0,
    destination: account,
    date: new Date().toISOString(),
  });
  expect(transaction).instanceOf(Transactions);
});
