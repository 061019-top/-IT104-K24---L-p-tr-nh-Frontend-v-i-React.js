class Animal {
    constructor(name) {
        this.name = name;
    }
    // Method thường: có sẵn code
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class Cat extends Animal {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
const dog = new Dog("Buddy");
dog.move(); // Có thể dùng method thường từ abstract class
dog.makeSound(); // Triển khai riêng của Dog
const cat = new Cat("Kitty");
cat.move();
cat.makeSound();
