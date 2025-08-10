"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `Tên: ${this.name}, Năm sản xuất: ${this.year}, Hãng: ${this.company}`;
    }
}
const vehicle1 = new Vehicle("Civic", 2020, "Honda");
const vehicle2 = new Vehicle("Model 3", 2023, "Tesla");
console.log(vehicle1.getInfo());
console.log(vehicle2.getInfo());
