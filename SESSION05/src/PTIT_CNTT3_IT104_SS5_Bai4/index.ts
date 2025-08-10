class Vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(id: number, name: string, year: number, company: string) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }

    printInfo(): void {
        console.log(`ID: ${this.id}`);
        console.log(`Tên: ${this.name}`);
        console.log(`Năm sản xuất: ${this.year}`);
        console.log(`Hãng: ${this.company}`);
    }
}

const vehicle = new Vehicle(1, "Civic", 2020, "Honda");
vehicle.printInfo();
