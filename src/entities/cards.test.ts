

// id: props.id,
// card_number: props.card_number,
// security_number: props.security_number,
// owner: props.owner,
// password: props.password,
// generatedAt: props.generatedAt,
// expiresAt: props.expiresAt//define a date of 2 years validation 

import { Cards } from "./cards";

test("should create a new card", () => {
    const card: Cards = new Cards({
        id: 1,
        card_number: "12321431",
        security_number: "123",
    });
})