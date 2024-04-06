import { ITransactions } from "../interface/ITransactions";
import { User } from "./user";


export class Transactions {

    private props: ITransactions;

    constructor(props: ITransactions) {
        this.props = {
            id: props.id,
            from: props.from,
            amount: props.amount,
            date: new Date().toISOString()
        };
    }

    get from():User {
        return this.props.from;
    }

    get amount():number {
        return this.props.amount;
    }

    get date() {
        return this.props.date;
    }
}