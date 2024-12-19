function Animal(name, kind) {
  this.name = name;
  this.kind = kind;

  this.speak = function (message) {
    console.log(`${this.name} says: ${message}`);
  };
}
let dog = new Animal("Dog");
let value = prompt("Enter message: ");

dog.speak(value);
