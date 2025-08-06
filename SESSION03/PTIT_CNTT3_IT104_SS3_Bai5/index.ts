// Khai báo hai biến với kiểu string
let firstName: string = "john";
let lastName: string = "doe";

// Hàm viết hoa chữ cái đầu tiên
function capitalize(str: string): string {
    if (str.length === 0) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Kiểm tra và viết hoa nếu cần
firstName = capitalize(firstName);
lastName = capitalize(lastName);

// Ghép chuỗi lại thành fullName
let fullName: string = `${firstName} ${lastName}`;

console.log("Full n/ In kết quả ra màn hìnhame:", fullName);