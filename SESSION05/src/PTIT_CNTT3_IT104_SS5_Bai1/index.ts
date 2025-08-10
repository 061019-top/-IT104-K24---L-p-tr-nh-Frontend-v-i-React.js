class Vehicle {
    name: string;
    year: number;
    company: string;

    constructor(name: string, year: number, company: string) {
        this.name = name;
        this.year = year;
        this.company = company;
    }

    getInfo(): string {
        return `Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng: ${this.company}`;
    }
}

const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Model 3", 2023, "Tesla");

console.log(vehicle1.getInfo());
console.log(vehicle2.getInfo());
