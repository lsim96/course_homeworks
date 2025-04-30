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
