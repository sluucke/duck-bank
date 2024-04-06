import { User } from "../entities/user";

export interface IFinantialAccount {
    id: number;
    pin: string;
    user: User;
    balance: number;
    isActive: boolean;
    createdAt: string;
    updatedAt?: string;
}