function sumArrays(...arrays) {
  return arrays.map(arr => arr.reduce((total, num) => total + num, 0));
}

// Ví dụ sử dụng
const result = sumArrays([1, 2], [6, 7, 8], [12, 8]);
console.log(result); // [3, 21, 20]
