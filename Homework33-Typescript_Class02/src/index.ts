//Task 01

interface Student {
  id: number;
  name: string;
  age: number;
  grades: number[];
}

function calculateAvarageGrade(students: Student[]): number {
  let totalSum = 0;
  let totalCount = 0;

  for (const student of students) {
    for (const grade of student.grades) {
      totalSum += grade;
      totalCount++;
    }
  }

  return totalCount === 0 ? 0 : totalSum / totalCount;
}

const students: Student[] = [
  { id: 1, name: "Leon", age: 29, grades: [8, 10, 9] },
  { id: 2, name: "Sofija", age: 25, grades: [9, 9, 10] },
  { id: 3, name: "Jane", age: 29, grades: [10, 8, 10] },
  { id: 4, name: "Daniel", age: 32, grades: [7, 8, 9] },
  { id: 5, name: "Stefan", age: 31, grades: [10, 10, 10] },
];

const avarage = calculateAvarageGrade(students);
console.log("Avarage grade:", avarage);

//Task 02

enum GradeLevel {
  FRESHMAN,
  SOPHMORE,
  JUNIOR,
  SENIOR,
}

function getGradeLevel(age: number) {
  if (age <= 14) {
    return GradeLevel.FRESHMAN;
  } else if (age === 15) {
    return GradeLevel.SOPHMORE;
  } else if (age === 16) {
    return GradeLevel.JUNIOR;
  } else {
    return GradeLevel.SENIOR;
  }
}

// const studentAge: number = 17;
const gradeLvel = getGradeLevel(
  18 /* studentAge, instead of a straight up number */
) as GradeLevel;
console.log("Grade level:", GradeLevel[gradeLvel]);

//Task 03

interface Course {
  id: number;
  name: string;
  students: Student[];
  instructor: string;
  maxStudents: number;
}

class CourseManager {
  private courses: Course[] = [];

  public addCourse(course: Course): void {
    this.courses.push(course);
  }

  public removeCourseById(courseId: number): void {
    this.courses = this.courses.filter((course) => course.id !== courseId);
  }

  public getCourseById(courseId: number): Course {
    const course = this.courses.find((course) => course.id === courseId);
    if (!course) {
      throw new Error(`Course with ID ${courseId} not  found`);
    }
    return course;
  }

  public getAllCourses(): Course[] {
    return [...this.courses];
  }
}

const manager = new CourseManager();

manager.addCourse({
  id: 1,
  name: "Chemistry",
  instructor: "Mr. Jack",
  maxStudents: 10,
  students: [],
});

manager.addCourse({
  id: 2,
  name: "History",
  instructor: "Ms. Emma",
  maxStudents: 15,
  students: [],
});

manager.addCourse({
  id: 3,
  name: "Physics",
  instructor: "Mr.Willis",
  maxStudents: 18,
  students: [],
});

manager.removeCourseById(1);

console.log(manager.getAllCourses());

try {
  const course = manager.getCourseById(3);
  console.log("Found course:", course.name);
} catch (error) {
  console.log(error as Error);
}

//Task 4.01

function getTopStudents(
  courseManager: CourseManager,
  courseId: number,
  bestStudents: number
): Student[] {
  const course = courseManager.getCourseById(courseId);

  if (!course) throw new Error("Course was not found!");

  if (!course.students.length) return [];

  const topNStudents = course.students
    .map((student) => {
      const avgGrade =
        student.grades.reduce((acc, curr) => acc + curr, 0) /
        student.grades.length;

      return {
        student,
        avgGrade,
      };
    })
    .sort((a, b) => b.avgGrade - a.avgGrade)
    .slice(0, bestStudents)
    .map(({ student }) => student);

  return topNStudents;
}

const studentA: Student = { id: 11, name: "Mile", age: 22, grades: [7, 9, 10] };
const studentB: Student = { id: 12, name: "Kici", age: 24, grades: [8, 8, 9] };
const studentC: Student = {
  id: 13,
  name: "Viktor",
  age: 21,
  grades: [9, 9, 10],
};
const studentD: Student = {
  id: 14,
  name: "Kristina",
  age: 28,
  grades: [10, 10, 10],
};

const course2: Course = {
  id: 1,
  name: "Programming",
  students: [studentA, studentB, studentC, studentD],
  instructor: "John Doe",
  maxStudents: 25,
};

const manager3 = new CourseManager();
manager3.addCourse(course2);

console.log(
  "Students with best avarage grade: ",
  getTopStudents(manager3, 1, 2)
);

//Task 4.02

// function getTopStudentsB(
//   courseManager: CourseManager,
//   courseId: number,
//   N: number
// ): Student[] {
//   const course = courseManager.getCourseById(courseId);

//   if (!course) throw new Error("Course was not found!");

//   if (!course.students || course.students.length === 0) return [];

//   const studentsWithAvg = course.students.map((student) => ({
//     ...student,
//     averageGrade:
//       student.grades.reduce((acc, curr) => acc + curr, 0) /
//       student.grades.length,
//   }));

//   return studentsWithAvg
//     .sort((a, b) => b.averageGrade - a.averageGrade)
//     .slice(0, N)
//     .map(({ averageGrade, ...student }) => student);
// }

// const student1: Student = { id: 11, name: "Mile", age: 22, grades: [7, 9, 10] };
// const student2: Student = { id: 12, name: "Kici", age: 24, grades: [8, 8, 9] };
// const student3: Student = {
//   id: 13,
//   name: "Viktor",
//   age: 21,
//   grades: [9, 9, 10],
// };
// const student4: Student = {
//   id: 14,
//   name: "Kristina",
//   age: 28,
//   grades: [10, 10, 10],
// };

// const course1: Course = {
//   id: 112,
//   name: "Science",
//   students: [studentA, studentB, studentC, studentD],
//   instructor: "Mr. Hackleberry",
//   maxStudents: 20,
// };

// const manager4 = new CourseManager();
// manager4.addCourse(course1);

// console.log("Student with best avg grade:", getTopStudentsB(manager4, 112, 1));
