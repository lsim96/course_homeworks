function Database() {
  this.students = [];
  this.insert = function (student) {
    this.students.push(student);
    return this.students;
  };
}

function Student(firstName, lastName, age, email) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.email = email;
}

let database = new Database();

let btn = document.getElementById("btn");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("emailInput").value;
  let form = document.getElementById("form");

  let student = new Student(firstName, lastName, age, email);

  database.insert(student);
  console.log(database.students);
  form.reset();
});
