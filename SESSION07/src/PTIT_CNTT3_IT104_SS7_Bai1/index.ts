class Employee {
  public name: string;
  protected company: string;
  private phone: string;

  constructor(name: string, company: string, phone: string) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }

  public printInfo(): void {
    console.log(`Name: ${this.name}`);
    console.log(`Company: ${this.company}`);
    console.log(`Phone: ${this.phone}`);
  }
}

class Manager extends Employee {
  public teamSize: number;

  constructor(name: string, company: string, phone: string, teamSize: number) {
    super(name, company, phone);
    this.teamSize = teamSize;
  }

  public printInfo(): void {
  
    super.printInfo();
    console.log(`Team Size: ${this.teamSize}`);
  }
}

const manager = new Manager("Minh", "TechCorp", "0123456789", 5);
manager.printInfo();