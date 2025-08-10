"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getInfo() {
        return `ID: ${this.id}, Tuổi: ${this.age}, Email: ${this.email}`;
    }
}
let students = [];
students.push(new Student(1, 20, "sv1@example.com"));
students.push(new Student(2, 22, "sv2@example.com"));
students.push(new Student(3, 19, "sv3@example.com"));
for (let student of students) {
    console.log(student.getInfo());
}
