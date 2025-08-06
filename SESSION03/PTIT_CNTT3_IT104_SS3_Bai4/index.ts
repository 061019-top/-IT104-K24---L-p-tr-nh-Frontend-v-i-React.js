// Khai báo hai biến
let input: string = "2";
let baseNumber: number = 2;

// So sánh bằng ==
if (input == baseNumber) {
    console.log("== Kết quả: Bằng nhau (so sánh lỏng)");
    // Vì == sẽ ép kiểu nên "2" (string) được chuyển thành 2 (number) trước khi so sánh
}

// So sánh bằng ===
if (input === baseNumber) {
    console.log("=== Kết quả: Bằng nhau (so sánh chặt)");
    // Điều này sẽ không xảy ra vì === yêu cầu kiểu dữ liệu giống nhau
    // "2" là string, còn 2 là number → không bằng nhau
} else {
    console.log("=== Kết quả: Không bằng nhau (khác kiểu dữ liệu)");
}