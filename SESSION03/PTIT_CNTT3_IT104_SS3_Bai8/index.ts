// Hàm kiểm tra và chuyển đổi chuỗi sang số nếu có thể
function parseToNumber(value: string | number): number | null {
    if (typeof value === "number") return value;
    const parsed = Number(value);
    return isNaN(parsed) ? null : parsed;
}

// Hàm cộng
function add(a: string | number, b: string | number): string | number {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA + numB;
}

// Hàm trừ
function subtract(a: string | number, b: string | number): string | number {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA - numB;
}

// Hàm nhân
function multiply(a: string | number, b: string | number): string | number {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null) return "Giá trị không hợp lệ";
    return numA * numB;
}

// Hàm chia
function divide(a: string | number, b: string | number): string | number {
    const numA = parseToNumber(a);
    const numB = parseToNumber(b);
    if (numA === null || numB === null || numB === 0) return "Giá trị không hợp lệ";
    return numA / numB;
}

// Ví dụ sử dụng
console.log("Cộng:", add("10", 5));         // 15
console.log("Trừ:", subtract("20", "4"));   // 16
console.log("Nhân:", multiply(3, "7"));     // 21
console.log("Chia:", divide("30", "0"));    // "Giá trị không hợp lệ"
console.log("Lỗi:", add("abc", 5));         // "Giá trị không hợp lệ"