import { ICards } from '@/interfaces/ICards';
import { User } from './user';

export class Cards {
  private readonly props: ICards;

  constructor(props: ICards) {
    this.props = {
      id: props.id,
      card_number: props.card_number,
      security_number: props.security_number,
      owner: props.owner,
      password: props.password,
      generatedAt: props.generatedAt,
      expiresAt: props.expiresAt, // define a date of 2 years validation
    };
  }

  get card_number(): string {
    return this.props.card_number;
  }

  get owner(): User {
    return this.props.owner;
  }

  get expirationDate(): Date {
    return this.props.expiresAt;
  }
}
