function Animal(name, kind) {
  this.name = name;
  this.kind = kind;

  this.speak = function (message, kind) {
    console.log(`${this.name} '(${kind})' says: ${message}`);
  };
}
let dog = new Animal("Dog");
let value = prompt("Enter message: ");
let kind = prompt("Enter dogs kind");

dog.speak(value, kind);
