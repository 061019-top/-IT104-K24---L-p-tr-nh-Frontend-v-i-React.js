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
}

// Tạo mảng tất cả học sinh
let allStudents: Student[] = [
    new Student(1, "An"),
    new Student(2, "Bình"),
    new Student(3, "Chi"),
    new Student(4, "Dũng"),
    new Student(5, "Hà"),
    new Student(6, "Linh")
];

// Tạo 2 lớp học
let class1 = new Classroom();
let class2 = new Classroom();

// Mỗi lớp 3 học sinh
for (let i = 0; i < 3; i++) {
    class1.addStudentInClass(allStudents[0], allStudents);
}
for (let i = 0; i < 3; i++) {
    class2.addStudentInClass(allStudents[0], allStudents);
}

console.log("Lớp 1:");
class1.showStudents();

console.log("\nLớp 2:");
class2.showStudents();

console.log("\nDanh sách học sinh còn lại:");
allStudents.forEach(s => console.log(`ID: ${s.getId()}, Name: ${s.getName()}`));
