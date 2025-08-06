// Hàm kiểm tra xem một từ có bị lặp ký tự không
function hasDuplicateChars(word: string): boolean {
    const charSet = new Set<string>();
    for (let char of word) {
        if (charSet.has(char)) return true;
        charSet.add(char);
    }
    return false;
}

// Hàm tìm từ dài nhất không có ký tự lặp
function findLongestUniqueWord(sentence: string): string {
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
let input: string = "hello world apple banana orange pumpkin cucumber";
let result: string = findLongestUniqueWord(input);
console.log("Từ dài nhất không lặp ký tự:", result); // Kết quả: "orange"