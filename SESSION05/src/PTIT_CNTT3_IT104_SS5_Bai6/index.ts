class Book {
    private title: string;
    private author: string;

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
    }

    getInfo(): string {
        return `${this.title} - ${this.author}`;
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
}

const library = new Library();

const book1 = new Book("Sách 1", "Tác giả A");
const book2 = new Book("Sách 2", "Tác giả B");
const book3 = new Book("Sách 3", "Tác giả C");
const book4 = new Book("Sách 4", "Tác giả D");
const book5 = new Book("Sách 5", "Tác giả E");

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.showBooks();
