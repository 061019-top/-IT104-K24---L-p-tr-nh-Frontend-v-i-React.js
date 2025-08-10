class Book {
    private id: number;
    private title: string;
    private author: string;

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }

    getId(): number {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getInfo(): string {
        return `${this.id}: ${this.title} - ${this.author}`;
    }

    updateInfo(title: string, author: string): void {
        this.title = title;
        this.author = author;
    }
}

class Library {
    private books: Book[] = [];

    addBook(book: Book): void {
        this.books.push(book);
    }

    showBooks(): void {
        console.log("Danh sách sách trong thư viện:");
        for (let book of this.books) {
            console.log(book.getInfo());
        }
    }

    updateBookById(id: number, title: string, author: string): void {
        const book = this.books.find(b => b.getId() === id);
        if (book) {
            book.updateInfo(title, author);
        } else {
            console.log(`Không tìm thấy sách với ID ${id}`);
        }
    }

    searchBooksByTitle(keyword: string): void {
        const results = this.books.filter(b => b.getTitle().toLowerCase().includes(keyword.toLowerCase()));
        if (results.length > 0) {
            console.log(`Kết quả tìm kiếm với từ khóa "${keyword}":`);
            results.forEach(book => console.log(book.getInfo()));
        } else {
            console.log(`Không tìm thấy sách nào với từ khóa "${keyword}"`);
        }
    }
}

const library = new Library();

library.addBook(new Book(1, "Sách Toán", "Tác giả A"));
library.addBook(new Book(2, "Sách Văn", "Tác giả B"));
library.addBook(new Book(3, "Sách Lý", "Tác giả C"));
library.addBook(new Book(4, "Sách Hóa", "Tác giả D"));
library.addBook(new Book(5, "Sách Lập trình", "Tác giả E"));

library.showBooks();

console.log("\nTìm kiếm sách có chữ 'Sách':\n");
library.searchBooksByTitle("Sách");

console.log("\nTìm kiếm sách có chữ 'Lập':\n");
library.searchBooksByTitle("Lập");
