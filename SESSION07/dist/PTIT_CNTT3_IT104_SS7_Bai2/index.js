class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    speedUp() {
        this.speed += 10;
        console.log(`${this.name} tăng tốc lên ${this.speed} km/h`);
    }
    slowDown() {
        this.speed = Math.max(0, this.speed - 10);
        console.log(`${this.name} giảm tốc xuống ${this.speed} km/h`);
    }
    showSpeed() {
        console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
    showInfo() {
        console.log(`Tên xe: ${this.name}`);
        console.log(`Tốc độ: ${this.speed} km/h`);
        console.log(`Mã định danh: ${this.id}`);
        console.log(`Số bánh răng: ${this.gear}`);
    }
}
const bike = new Bicycle("Xe đạp thể thao", 20, "B123", 6);
bike.showInfo();
bike.speedUp();
bike.slowDown();
bike.showSpeed();
