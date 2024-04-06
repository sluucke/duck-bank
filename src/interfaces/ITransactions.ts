import { FinantialAccount } from "../entities/finantialAccount";
import { User } from "../entities/user";

export interface ITransactions {
  id: number;
  from: User;
  destination: FinantialAccount;
  amount: number;
  date: string;
}
