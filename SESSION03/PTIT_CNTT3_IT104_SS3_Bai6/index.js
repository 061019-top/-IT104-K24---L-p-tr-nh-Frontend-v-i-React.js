"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo biến với kiểu dữ liệu cụ thể
let num1 = 20;
let num2 = 5;
let num3;
let num4 = "10";
let num5 = true;
// Phép cộng
num3 = num1 + num2;
console.log("Cộng:", num3); // 25
// Phép trừ
num3 = num1 - num2;
console.log("Trừ:", num3); // 15
// Phép nhân
num3 = num1 * num2;
console.log("Nhân:", num3); // 100
// Phép chia
num3 = num1 / num2;
console.log("Chia:", num3); // 4
// Phép cộng giữa chuỗi và boolean
let result = num4 + num5;
console.log("num4 + num5 =", result); // "10true"
console.log("Giải thích: Khi cộng một chuỗi với một giá trị boolean, TypeScript (giống như JavaScript) sẽ tự động ép kiểu boolean thành chuỗi. Vì vậy, '10' + true trở thành '10true'.");
//# sourceMappingURL=index.js.map