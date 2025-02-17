function Academy(name, start, end, subjects = [], students = []) {
  this.name = name;
  this.students = students;
  this.subjects = subjects;
  this.start = start;
  this.end = end;

  this.numberOfClasses = this.subjects.length * 10;

  this.PrintStudents = function () {
    this.students.forEach((student) => {
      console.log(student);
    });
  };

  this.PrintSubjects = function () {
    this.subjects.forEach((subject) => {
      console.log(subject);
    });
  };
}

function Subject(title, academy, students = [], isElective = false) {
  this.Title = title;
  this.NumberOfClasses = 10;
  this.isElective = isElective;
  this.academy = academy;
  this.students = students;

  this.overrideClasses = function (num) {
    if (num < 3) {
      console.log("Minimum amount of classes is 3");
    } else {
      this.NumberOfClasses = num;
    }
  };
}

function Student(
  firstName,
  lastName,
  age,
  completedSubjects = [],
  currentSubject = null,
  Academy = null
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.completedSubjects = completedSubjects;
  this.Academy = Academy;
  this.currentSubject = currentSubject;

  this.startAcademy = function (academy) {
    this.Academy = academy;
    this.Academy.students.push(`${this.firstName} ${this.lastName}`);
  };

  this.startSubject = function (subject) {
    if (this.Academy && this.Academy.subjects.includes(subject.title)) {
      if (this.currentSubject) {
        this.completedSubjects.push(this.currentSubject);
      }
      this.currentSubject = subject;
      subject.students.push(`${this.firstName} ${this.lastName}`);
    } else {
      console.log("The subject doesnt exist in the current Academy");
    }
  };
}

let academy = new Academy(
  "Cooking",
  "10.18.2024",
  "10.18.2025",
  ["Sauteeing", "Grilling", "Slow cooking", "Marinating", "Skilleting"],
  [
    "Jane Janevski",
    "Daniel Kezaroski",
    "Sofija Simonoska",
    "Edvard Gelov",
    "Elena Stojkova",
  ]
);

let subject = new Subject("Sauteeing", academy, [
  "Jane Janevski",
  "Daniel Kezaroski",
  "Sofija Simonoska",
  "Edvard Gelov",
  "Elena Stojkova",
]);

let student = new Student(
  "Mirko",
  "Petkov",
  25,
  ["Grilling", "Slow cooking", "Skilleting"],
  subject
);

console.log(academy);
academy.PrintStudents();
academy.PrintSubjects();

subject.overrideClasses(25);
console.log(subject);

student.startAcademy(academy);
student.startSubject(subject);

console.log(student);
