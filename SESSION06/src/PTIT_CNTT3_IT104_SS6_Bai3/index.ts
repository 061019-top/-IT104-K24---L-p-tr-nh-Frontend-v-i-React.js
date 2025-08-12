abstract class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    // Method thường: có sẵn code
    move(): void {
        console.log(`${this.name} is moving`);
    }

    // Abstract method: không có code, lớp con bắt buộc phải triển khai
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof! Woof!");
    }
}

class Cat extends Animal {
    makeSound(): void {
        console.log("Meow! Meow!");
    }
}

const dog = new Dog("Buddy");
dog.move();       // Có thể dùng method thường từ abstract class
dog.makeSound();  // Triển khai riêng của Dog

const cat = new Cat("Kitty");
cat.move();
cat.makeSound();
