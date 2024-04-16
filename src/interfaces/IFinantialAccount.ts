import { Transactions } from '@/entities/transactions';
import { User } from '../entities/user';

export interface IFinantialAccount {
  id: number;
  pin: string;
  user: User;
  transactions: Transactions[];
  balance: number;
  isActive: boolean;
  createdAt: string;
  updatedAt?: string;
}
