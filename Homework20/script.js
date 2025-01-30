const url =
  "https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //1. Students with avarage grade higher than 3
    let students1 = data.filter((x) => x.averageGrade > 3);
    console.log(students1);

    //2. Female students with avarage grade of 5
    let students2 = data.filter(
      (x) => x.gender === "Female" && x.averageGrade > 4
    );

    console.log(students2);

    //3. Male students who live in Skopje and are over 18 years old
    let students3 = data
      .filter((x) => x.city === "Skopje" && x.age > 18)
      .map((x) => `${x.firstName} ${x.lastName}`);
    console.log(students3);

    //4 Average number of all the grades of all female students over 24
    let students4 = data.filter((x) => x.gender === "Female" && x.age > 24);
    let sum = students4.reduce((acc, current) => acc + current.averageGrade, 0);
    let avg = sum / students4.length;
    console.log(avg);

    //5 Male students with a name starting with B and average grade over 2
    let students5 = data.filter(
      (x) => x.firstName.startsWith("B") && x.averageGrade > 2
    );
    console.log(students5);
  });
