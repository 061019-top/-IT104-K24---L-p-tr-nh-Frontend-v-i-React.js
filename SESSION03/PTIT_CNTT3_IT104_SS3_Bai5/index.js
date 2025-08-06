"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo hai biến với kiểu string
let firstName = "john";
let lastName = "doe";
// Hàm viết hoa chữ cái đầu tiên
function capitalize(str) {
    if (str.length === 0)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
// Kiểm tra và viết hoa nếu cần
firstName = capitalize(firstName);
lastName = capitalize(lastName);
// Ghép chuỗi lại thành fullName
let fullName = `${firstName} ${lastName}`;
console.log("Full n/ In kết quả ra màn hìnhame:", fullName);
//# sourceMappingURL=index.js.map