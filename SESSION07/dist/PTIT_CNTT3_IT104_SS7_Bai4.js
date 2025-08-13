class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`Sinh viên: ${this.name}, Mã SV: ${this.id}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Giáo viên: ${this.name}, Môn giảng dạy: ${this.subject}`);
    }
}
const people = [
    new Student("Minh", "SV001"),
    new Teacher("Thầy Nam", "Toán")
];
for (const person of people) {
    person.displayInfo();
}
