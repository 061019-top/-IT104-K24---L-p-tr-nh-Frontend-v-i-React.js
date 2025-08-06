"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Hàm kiểm tra xem một từ có bị lặp ký tự không
function hasDuplicateChars(word) {
    const charSet = new Set();
    for (let char of word) {
        if (charSet.has(char))
            return true;
        charSet.add(char);
    }
    return false;
}
// Hàm tìm từ dài nhất không có ký tự lặp
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longest = "";
    for (let word of words) {
        if (!hasDuplicateChars(word) && word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}
// Ví dụ sử dụng
let input = "hello world apple banana orange pumpkin cucumber";
let result = findLongestUniqueWord(input);
console.log("Từ dài nhất không lặp ký tự:", result); // Kết quả: "orange"
//# sourceMappingURL=index.js.map