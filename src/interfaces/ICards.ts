import { User } from '../entities/user';

export interface ICards {
  id: number;
  card_number: string;
  security_number: string;
  owner: User;
  password: string;
  generatedAt: Date;
  expiresAt: Date;
  // bank: Bank
}
