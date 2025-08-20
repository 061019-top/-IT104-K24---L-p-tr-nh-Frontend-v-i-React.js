// Tạo mảng sinh viên
const students = [
  { id: 1, name: "Chu" },
  { id: 2, name: "Đình" },
  { id: 3, name: "Minh" }
];

// In lời chào bằng Template String
students.forEach(student => {
  console.log(`Xin chào ${student.name}! Mã số: ${student.id}.`);
});
