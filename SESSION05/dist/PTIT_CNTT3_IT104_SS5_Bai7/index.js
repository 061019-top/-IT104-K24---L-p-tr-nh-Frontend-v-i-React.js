"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    constructor(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId() {
        return this.id;
    }
    getInfo() {
        return `${this.id}: ${this.title} - ${this.author}`;
    }
    updateInfo(title, author) {
        this.title = title;
        this.author = author;
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        for (let book of this.books) {
            console.log(book.getInfo());
        }
    }
    updateBookById(id, title, author) {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(title, author);
        }
        else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }
}
const library = new Library();
library.addBook(new Book(1, "Sách 1", "Tác giả A"));
library.addBook(new Book(2, "Sách 2", "Tác giả B"));
library.addBook(new Book(3, "Sách 3", "Tác giả C"));
library.addBook(new Book(4, "Sách 4", "Tác giả D"));
library.addBook(new Book(5, "Sách 5", "Tác giả E"));
library.showBooks();
console.log("\nCập nhật sách ID 3:\n");
library.updateBookById(3, "Sách 3 - Bản Mới", "Tác giả Z");
library.showBooks();
