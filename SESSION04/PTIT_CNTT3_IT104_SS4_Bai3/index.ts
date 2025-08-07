type Student = {
  name: string;
  age: number;
  email: string;
};

const studentInfo: Student = {
  name: "Chu Đình Minh",
  age: 22,
  email: "minhchu@example.com"
};

function introduce(student: Student): void {
  console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
}

introduce(studentInfo);
