function weightInChickens(weight) {
  let oneChicken = 0.5;
  return weight / oneChicken;
}

let input = parseInt(prompt("Enter your weight"));
let paragraphNew = document.getElementById("result");
if (!Number.isNaN(input)) {
  paragraphNew.innerHTML = `<h1>${input} is ${weightInChickens(input)}`;
} else if (Number.isNaN) {
  alert("Wrong input");
}