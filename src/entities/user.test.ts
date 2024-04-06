import { expect, test } from "vitest";
import { UserMockTest } from "../tests/mock/UserMock";
import { User } from "./user";

test("create an user", () => {
  expect(UserMockTest()).instanceOf(User);
});

test("cannot create an user with wrong email", () => {
  expect(() => {
    return UserMockTest({
      email: "johndoeemail.com",
    });
  }).to.throw();
});
