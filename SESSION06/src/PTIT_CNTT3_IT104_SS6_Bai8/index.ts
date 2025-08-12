class Book {
    private id: number;
    private title: string;
    private author: string;
    private stock: number;
    private status: string;

    constructor(id: number, title: string, author: string, stock: number, status: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getAuthor(): string {
        return this.author;
    }

    getStock(): number {
        return this.stock;
    }

    getStatus(): string {
        return this.status;
    }
}

class Member {
    private id: number;
    private name: string;
    private contact: string;
    private lendedBooks: LendedBook[];
    private status: string;

    constructor(id: number, name: string, contact: string, status: string) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.status = status;
        this.lendedBooks = [];
    }
}

class LendedBook {
    private memberId: number;
    private bookId: number;
    private dueDate: string;

    constructor(memberId: number, bookId: number, dueDate: string) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}

class Library {
    private books: Book[];
    private members: Member[];

    constructor() {
        this.books = [];
        this.members = [];
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
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
