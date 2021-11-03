
type bankAccount = {
    money: number,
    deposit(value: number): void;
};
let bankAccount = {
    money: 2000,
    deposit(value: number) {
        this.money += value;
    }
}

type myself = {
    name: string,
    bankAccount: bankAccount,
    hobbies: string[];
};


let myself = {
    name: "John",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself.bankAccount.money);
console.log(myself);