class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];
  protected status: "active" | "inactive";

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.history = [];
    this.status = "active";
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      this.history.push(`Nạp: +${amount} => Số dư: ${this.balance}`);
    } else {
      console.log("Số tiền nạp phải lớn hơn 0");
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
    } else {
      console.log("Không thể rút số tiền này");
    }
  }

  public showHistory(): void {
    console.log(`Lịch sử giao dịch của tài khoản ${this.accountNumber}:`);
    this.history.forEach((entry) => console.log(entry));
  }
}

class SavingAccount extends Account {
  public interestRate: number;

  constructor(accountNumber: string, initialBalance: number, interestRate: number) {
    super(accountNumber, initialBalance);
    this.interestRate = interestRate;
  }

  public withdraw(amount: number): void {
    if (amount > 0 && this.balance - amount >= 0) {
      this.balance -= amount;
      this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
    } else {
      console.log("Không thể rút vượt quá số dư");
    }
  }
}


const mySavingAcc = new SavingAccount("AC123456", 5000, 0.05);

mySavingAcc.deposit(1000);   // Nạp tiền
mySavingAcc.withdraw(2000);  // Rút tiền
mySavingAcc.withdraw(5000);  // Quá số dư, không được phép
mySavingAcc.showHistory();   // In lịch sử giao dịch