import { expect, test } from 'vitest';
import { FinantialAccount } from "./finantialAccount";
import { User } from './user';

test("should create a finantial account", () => {
    const user:User = new User({
        id: 1,
        name: "John Doe",
        email: "johndoe@email.com",
        password: "123456",
      });

    const account:FinantialAccount = new FinantialAccount({
        id:1,
        pin:"12345744",
        user: user,
        balance:0,
        isActive:true,
        createdAt: new Date().toISOString()
    });
    
    expect(account).instanceOf(FinantialAccount);
});


