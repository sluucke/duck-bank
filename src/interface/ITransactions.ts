import { User } from "../entities/user";


export interface ITransactions {
    id: number;
    from: User;
    amount: number;
    date: string;
}