"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}
const rect = new Rectangle(5, 10);
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Diện tích: ${rect.getArea()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
rect.setWidth(8);
rect.setHeight(12);
console.log(`\nSau khi cập nhật:`);
console.log(`Chiều rộng: ${rect.getWidth()}`);
console.log(`Chiều dài: ${rect.getHeight()}`);
console.log(`Diện tích: ${rect.getArea()}`);
console.log(`Chu vi: ${rect.getPerimeter()}`);
