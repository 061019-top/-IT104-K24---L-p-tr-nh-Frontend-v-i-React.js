class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Tên động vật: ${this.name}`);
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
}
const cat = new Cat("Miu");
const dog = new Dog("Vàng");
cat.printName();
cat.makeNoise();
dog.printName();
dog.makeNoise();
