"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function processInput(input) {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const num = Number(input);
            console.log(num * num);
        }
        else {
            const letters = input.replace(/[^a-zA-Z]/g, "");
            console.log(`${letters.length} ký tự chữ cái`);
        }
    }
    else if (typeof input === "number") {
        if (Number.isInteger(input)) {
            console.log("Là số nguyên tố");
        }
        else {
            console.log("Không phải số nguyên tố");
        }
    }
    else if (typeof input === "boolean") {
        if (input) {
            console.log("Giá trị là true - tiến hành xử lý");
        }
        else {
            console.log("Giá trị là false - dừng xử lý");
        }
    }
}
processInput("123");
processInput("abc123!");
processInput(10);
processInput(3.14);
processInput(true);
processInput(false);
//# sourceMappingURL=index.js.map