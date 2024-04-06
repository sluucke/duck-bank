
import { expect, test } from "vitest";
import { Cards } from "./cards";
import { User } from "./user";

test("should create a new card", () => {

    const user: User = new User({
        id: 1,
        email: "johndoe@email.com",
        name: "John Doe",
        password: "123456",
      });

    const card: Cards = new Cards({
        id: 1,
        card_number: "12321431",
        security_number: "123",
        owner: user,
        password: "121212",
        generatedAt: new Date(),
        expiresAt: new Date()
    });

    expect(card).instanceOf(Cards);
})