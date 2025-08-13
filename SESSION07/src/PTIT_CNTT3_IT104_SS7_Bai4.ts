abstract class Person {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public abstract displayInfo(): void;
}

class Student extends Person {
  public id: string;

  constructor(name: string, id: string) {
    super(name);
    this.id = id;
  }

  public displayInfo(): void {
    console.log(`Sinh viên: ${this.name}, Mã SV: ${this.id}`);
  }
}

class Teacher extends Person {
  public subject: string;

  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }

  public displayInfo(): void {
    console.log(`Giáo viên: ${this.name}, Môn giảng dạy: ${this.subject}`);
  }
}

const people: Person[] = [
  new Student("Minh", "SV001"),
  new Teacher("Thầy Nam", "Toán")
];

for (const person of people) {
  person.displayInfo();
}