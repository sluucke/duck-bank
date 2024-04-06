import { User } from "../../entities/user";
import { IUser } from "../../interfaces/IUser";
import { PartialBy } from "../../interfaces/Utils";

export const UserMockTest = (
  data?: PartialBy<IUser, "id" | "email" | "name" | "password">
) =>
  new User({
    id: "1",
    email: "johndoe@email.com",
    name: "John Doe",
    password: "123456",
    ...data,
  });
