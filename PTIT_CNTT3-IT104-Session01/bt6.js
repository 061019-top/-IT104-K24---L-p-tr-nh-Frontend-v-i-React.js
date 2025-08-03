function createUser(name, age = 18, role = "user") {
  return {
    name: name,
    age: age,
    role: role
  };
}

// Dữ liệu cá nhân của bạn
console.log(createUser("Chu Đình Minh", 18, "Admin"));
// Output: { name: 'Chu Đình Minh', age: 18, role: 'Admin' }

console.log(createUser("Chu Đình Minh"));
// Output: { name: 'Chu Đình Minh', age: 18, role: 'user' }
