class Vehicle {
    constructor() {
        this.speed = 0;
    }
    speedUp(amount) {
        this.speed += amount;
        console.log(`Tăng tốc: ${this.speed} km/h`);
    }
    slowDown(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`Giảm tốc: ${this.speed} km/h`);
    }
    stop() {
        this.speed = 0;
        console.log(`Dừng xe. Tốc độ hiện tại: ${this.speed} km/h`);
    }
}
// Test
const myVehicle = new Vehicle();
myVehicle.speedUp(20);
myVehicle.slowDown(5);
myVehicle.stop();
