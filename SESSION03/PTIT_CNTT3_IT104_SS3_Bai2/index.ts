// Khai báo một biến tên là 'username' và gán cho nó giá trị kiểu chuỗi
let username: string = "Alice";

// Sau đó, gán lại giá trị kiểu số cho biến username
username = 123; // ❌ Lỗi: Kiểu 'number' không thể gán cho kiểu 'string'

// TypeScript sẽ báo lỗi ở dòng trên vì biến 'username' đã được khai báo là kiểu 'string',
// nên không thể gán giá trị kiểu số (number) cho nó được.
// Đây là cơ chế kiểm tra kiểu tĩnh (static type checking) của TypeScript.
