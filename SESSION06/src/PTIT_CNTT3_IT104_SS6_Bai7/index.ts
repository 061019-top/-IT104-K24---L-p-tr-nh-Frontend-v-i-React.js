class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

class Classroom {
    private students: Student[];

    constructor() {
        this.students = [];
    }

    showStudents(): void {
        console.log("Danh sách học sinh:");
        this.students.forEach(student => {
            console.log(`ID: ${student.getId()}, Name: ${student.getName()}`);
        });
    }

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student[] {
        return this.students.filter(student => student.getId() === id);
    }

    addStudentInClass(student: Student, allStudents: Student[]): void {
        this.addStudent(student);
        const index = allStudents.findIndex(s => s.getId() === student.getId());
        if (index !== -1) {
            allStudents.splice(index, 1);
        }
    }

    removeStudent(id: number, allStudents: Student[]): void {
        const index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            const removedStudent = this.students.splice(index, 1)[0];
            allStudents.push(removedStudent);
        }
    }

    editStudent(id: number, newName: string): void {
        const student = this.students.find(s => s.getId() === id);
        if (student) {
            student.setName(newName);
        }
    }
}

let allStudents: Student[] = [
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Linh")
];

let class1 = new Classroom();
for (let i = 0; i < 3; i++) {
    class1.addStudentInClass(allStudents[0], allStudents);
}

console.log("Lớp ban đầu:");
class1.showStudents();

class1.editStudent(2, "Bình sửa");
console.log("\nSau khi sửa tên học sinh ID=2:");
class1.showStudents();

class1.removeStudent(1, allStudents);
console.log("\nSau khi xóa học sinh ID=1:");
class1.showStudents();

console.log("\nDanh sách allStudents:");
allStudents.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
