"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo biến kiểu string với một câu bất kỳ
let input = "hello world";
// Hàm lọc ký tự trùng lặp
function removeDuplicateChars(str) {
    let seen = new Set();
    let result = "";
    for (let char of str) {
        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }
    }
    return result;
}
// Gọi hàm và in kết quả
let output = removeDuplicateChars(input);
console.log("Chuỗi sau khi lọc:", output); // "helo wrd"
//# sourceMappingURL=index.js.map