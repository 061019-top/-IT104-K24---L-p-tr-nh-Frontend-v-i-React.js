class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
        this.history = [];
        this.status = "active";
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.history.push(`Nạp: +${amount} => Số dư: ${this.balance}`);
        }
        else {
            console.log("Số tiền nạp phải lớn hơn 0");
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
        }
        else {
            console.log("Không thể rút số tiền này");
        }
    }
    showHistory() {
        console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
        this.history.forEach((entry) => console.log(entry));
    }
}
class SavingAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    withdraw(amount) {
        if (amount > 0 && this.balance - amount >= 0) {
            this.balance -= amount;
            this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
        }
        else {
            console.log("Không thể rút vượt quá số dư");
        }
    }
}
// 🧪 Ví dụ sử dụng
const mySavingAcc = new SavingAccount("AC123456", 5000, 0.05);
mySavingAcc.deposit(1000); // Nạp tiền
mySavingAcc.withdraw(2000); // Rút tiền
mySavingAcc.withdraw(5000); // Quá số dư, không được phép
mySavingAcc.showHistory(); // In lịch sử giao dịch
