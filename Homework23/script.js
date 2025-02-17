class Animal {
  constructor(name, type, age, size) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.size = size;
    this.isEaten = false;
  }

  eat(food) {
    if (food instanceof Animal) {
      if (this.type === "herbivore") {
        console.log(
          `The animal ${this.name} is a herbivore and does not eat other animals.`
        );
      } else {
        if (food.size >= 2 * this.size) {
          console.log(
            `The animal ${this.name} tried to eat the ${food.name}, but it was too large`
          );
        } else {
          food.isEaten = true;
          console.log(`The animal ${this.name} ate the ${food.name}.`);
        }
      }
    } else {
      console.log(`The animal ${this.name} is eating ${food}`);
    }
  }
}

let tiger = new Animal("Tiger", "carnivore", 5, 250);
let gazelle = new Animal("Gazelle", "herbivore", 3, 100);
let fox = new Animal("Fox", "omnivore", 2, 50);

tiger.eat(gazelle);
tiger.eat(fox);
gazelle.eat(fox);
fox.eat(tiger);
tiger.eat("kebapi");
