import { IFinantialAccount } from "./../interface/IFinantialAccount";


export class FinantialAccount {

    private props: IFinantialAccount;

    constructor(props: IFinantialAccount) {
        this.props = {
            id: props.id,
            pin: props.pin,
            user: props.user,
            balance: props.balance,
            isActive: props.isActive,
            createdAt: new Date().toISOString()
        };
    }


    get user() {
        return this.props.user;
    }

    get balance() {
        return this.props.balance;
    }

    isActive() {
        return this.props.isActive;
    }

}