class Account {
  public accountNumber: string;
  protected balance: number;
  protected history: string[];

  constructor(accountNumber: string, initialBalance: number) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
    this.history = [];
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

class CheckingAccount extends Account {
  public overdraftLimit: number;

  constructor(accountNumber: string, initialBalance: number, overdraftLimit: number) {
    super(accountNumber, initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance + this.overdraftLimit) {
      this.balance -= amount;
      this.history.push(`Rút: -${amount} => Số dư: ${this.balance}`);
    } else {
      console.log("Vượt quá hạn mức cho phép");
    }
  }
}

// 🧪 Ví dụ sử dụng
const myCheckingAcc = new CheckingAccount("CK001", 1000, 500);

myCheckingAcc.deposit(300);    
myCheckingAcc.withdraw(1100);  
myCheckingAcc.withdraw(800);   
myCheckingAcc.showHistory();    