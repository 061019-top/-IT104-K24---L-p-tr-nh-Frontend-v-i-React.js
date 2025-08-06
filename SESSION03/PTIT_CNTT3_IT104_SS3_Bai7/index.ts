// Khai báo biến kiểu string với một câu bất kỳ
let input: string = "hello world";

// Hàm lọc ký tự trùng lặp
function removeDuplicateChars(str: string): string {
    let seen = new Set<string>();
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
let output: string = removeDuplicateChars(input);
console.log("Chuỗi sau khi lọc:", output); // "helo wrd"