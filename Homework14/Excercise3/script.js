let studentForm = document.getElementById("studentForm");
let result1 = document.getElementById("result1");

let students = [];
function Student(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

function showStudents(studentArr, element) {
  element.innerHTML = "";
  for (let student of studentArr) {
    element.innerHTML += `<li>Name: ${student.firstName} ${student.lastName}, Age: ${student.age}</li>`;
  }
}

document.getElementById("btn").addEventListener("click", function () {
  let firstName = studentForm.children[0].value;
  let lastName = studentForm.children[1].value;
  let age = studentForm.children[2].value;
  let newStudent = new Student(firstName, lastName, age);
  students.push(newStudent);
  showStudents(students, result1.getElementsByTagName("ul")[0]);
  studentForm.children[0].value = "";
  studentForm.children[1].value = "";
  studentForm.children[2].value = "";
});
