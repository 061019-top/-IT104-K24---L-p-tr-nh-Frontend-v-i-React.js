let a = [1, 2, 3, 5, 9];
let b = [4, 6, 7, 8];
let c = [...a, ...b].sort((x, y) => x - y);
console.log(c);  // [1, 2, 3, 4, 5, 6, 7, 8, 9]
