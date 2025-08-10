"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printInfo() {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng: ${this.company}`);
    }
}
const vehicle = new Vehicle(1, "Civic", 2020, "Honda");
vehicle.printInfo();
