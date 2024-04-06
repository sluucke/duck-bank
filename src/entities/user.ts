// import { User } from '../interfaces/user';
// TODO: Create an folder interfaces inside src and create a file user.ts with interface below
interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
  created_at?: string;
  updated_at?: string;
}

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
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
  }
  get name() {
    return this.props.name;
  }

  get email() {
    return this.props.email;
  }
}
