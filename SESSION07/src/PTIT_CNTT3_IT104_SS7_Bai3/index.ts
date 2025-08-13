abstract class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeNoise(): void;

  public printName(): void {
    console.log(`Tên động vật: ${this.name}`);
  }
}

class Cat extends Animal {
  public makeNoise(): void {
    console.log("meo meo");
  }
}

class Dog extends Animal {
  public makeNoise(): void {
    console.log("gâu gâu");
  }
}

const cat = new Cat("Miu");
const dog = new Dog("Vàng");

cat.printName();  
cat.makeNoise();  

dog.printName();  
dog.makeNoise();   