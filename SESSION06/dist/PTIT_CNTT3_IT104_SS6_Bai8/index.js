class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    getId() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getAuthor() {
        return this.author;
    }
    getStock() {
        return this.stock;
    }
    getStatus() {
        return this.status;
    }
}
class Member {
    constructor(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}
class LendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor() {
        this.books = [];
        this.members = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    showBooks() {
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach(b => {
            console.log(`ID: ${b.getId()}, Title: ${b.getTitle()}, Author: ${b.getAuthor()}, Stock: ${b.getStock()}, Status: ${b.getStatus()}`);
        });
    }
}
let library = new Library();
library.addBook(new Book(1, "Lập trình Java", "Nguyễn Văn A", 5, "Có sẵn"));
library.addBook(new Book(2, "Học TypeScript", "Trần Văn B", 3, "Có sẵn"));
library.addBook(new Book(3, "Cấu trúc dữ liệu và Giải thuật", "Lê Văn C", 2, "Có sẵn"));
library.showBooks();
