// import { User } from '../interfaces/user';
// TODO: Create an folder interfaces inside src and create a file user.ts with interface below

export class User {
  private props: IUser;

  constructor(props: IUser) {
    if (
      new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$").test(
        props.email
      ) === false
    ) {
      throw new Error("Invalid email");
    }

    this.props = {
      id: props.id,
      name: props.name,
      email: props.email,
      password: props.password,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
  }
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }

  get password() {
    return this.props.password;
  }
}
