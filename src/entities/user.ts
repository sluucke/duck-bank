import { IUser } from '../interfaces/IUser';

export class User {
  private readonly props: IUser;

  constructor(props: IUser) {
    if (
      !new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$').test(
        props.email,
      )
    ) {
      throw new Error('Invalid email');
    }

    this.props = {
      id: props.id,
      name: props.name,
      email: props.email,
      password: props.password,
      createdAt: props.createdAt,
      updatedAt: props.updatedAt,
    };
  }

  set name(name: string) {
    this.props.name = name;
  }

  set email(email: string) {
    this.props.email = email;
  }

  set password(password: string) {
    this.props.password = password;
  }

  get id() {
    return this.props.id;
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
