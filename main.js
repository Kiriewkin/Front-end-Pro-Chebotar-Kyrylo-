class BankAccount {

    constructor(balance) {
        this.balance = balance;
    }

    deposit(sum) {
        if(sum < 0) {
            console.log(`Сумма для пополнения должна быть больше нуля`)
        } else {
            this.balance += sum;
            console.log(`Успешно пополнено ${sum}. Новый баланс: ${this.balance}`)
            return this.balance
        }
    }

    withdraw(sum) {
        if (sum > this.balance) {
            console.log(`Не хватает средств для операции`);
            return false;
        } else if (sum <= 0) {
            console.log(`Сумма для снятия должна быть больше нуля`);
            return false;
        } else {
            this.balance -= sum;
            console.log(`Успешно снято ${sum}. Новый баланс: ${this.balance}`);
            return this.balance
        }
    }
    
    getBalance() {
        return this.balance;
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(200);
console.log(account1.getBalance());
