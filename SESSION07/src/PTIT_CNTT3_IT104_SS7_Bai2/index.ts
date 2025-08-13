class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: string;

  constructor(name: string, speed: number, id: string) {
    this.name = name;
    this.speed = speed;
    this.id = id;
  }

  public speedUp(): void {
    this.speed += 10;
    console.log(`${this.name} tăng tốc lên ${this.speed} km/h`);
  }

  public slowDown(): void {
    this.speed = Math.max(0, this.speed - 10);
    console.log(`${this.name} giảm tốc xuống ${this.speed} km/h`);
  }

  public showSpeed(): void {
    console.log(`Tốc độ hiện tại của ${this.name} là ${this.speed} km/h`);
  }
}

class Bicycle extends Vehicle {
  private gear: number;

  constructor(name: string, speed: number, id: string, gear: number) {
    super(name, speed, id);
    this.gear = gear;
  }

  public showInfo(): void {
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