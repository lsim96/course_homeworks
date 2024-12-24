let contentDiv = document.querySelector("#content");
let contentDiv1 = document.querySelector("#content1");
let contentDiv2 = document.querySelector("#content2");

let numbers = [2, 4, 5];
let sum = 0;

function printNums(nums, element) {
  element.innerHtml = "";
  let content = "<ul>";
  for (let num of nums) {
    content += `<li>${num}</li>`;
  }
  content += "</ul>";
  console.log(content);
  element.innerHTML = content;
}
printNums(numbers, contentDiv);

function printSum(nums, element) {
  element.innerHtml = "";

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  let content = "<ul>";
  content += `<li>${sum}</li>`;
  content += "</ul";
  console.log(content);
  element.innerHTML = content;
}
printSum(numbers, contentDiv1);

function printEquation(nums, element) {
  element.innerHtml = "";
  let content = "<ul>";

  for (let i = 0; i < nums.length; i++) {
    content = `<li>${nums[0]} + ${nums[1]} + ${nums[2]} = ${sum}</li>`;
  }
  content += "</ul";
  element.innerHTML = content;
}

printEquation(numbers, contentDiv2);
