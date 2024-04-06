import { expect, test } from "vitest";
import { Transactions } from "./transactions"
import { User } from "./user";

test("should transfer money", () => {

    const user: User = new User({
        id: 1,
        email: "johndoe@email.com",
        name: "John Doe",
        password: "123456",
      });

    const transaction:Transactions = new Transactions({
        id: 1,
        from: user,
        amount: 150.0,
        date: new Date().toISOString()
    })
    expect(transaction).instanceOf(Transactions);
});