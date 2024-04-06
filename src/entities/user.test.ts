import { expect, test } from "vitest";
import { User } from "./user";

test("create an user", () => {
  const user = new User({
    id: 1,
    email: "johndoe@email.com",
    name: "John Doe",
    password: "123456",
  });

  expect(user).instanceOf(User);
});

test("cannot create an user with wrong email", () => {
  expect(() => {
    return new User({
      id: 1,
      email: "johndoeemail.com",
      name: "John Doe",
      password: "123456",
    });
  }).to.throw();
});
