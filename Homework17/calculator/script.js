let firstNumber;
let secondNumber;

let step = 0;
let operation;
let result = 0;

let numArray = [];
let secondArray = [];

let display = document.getElementById("display");
let errorMessage = document.getElementById("errorMessage");

function getNumber(num) {
  if (step === 0 || step === 1) {
    numArray.push(num);
    step = 1;
    firstNumber = Number(numArray.join(""));
    display.value = firstNumber;
  } else if (step === 2) {
    secondArray.push(num);
    secondNumber = Number(secondArray.join(""));
    display.value = secondNumber;
  }
}

function getOperator(op) {
  step = 2;
  operation = op;
}

function clearDisplay() {
  display.value = 0;
  firstNumber = null;
  secondNumber = null;
  step = 0;
  operation = null;
  result = 0;
  numArray = [];
  secondArray = [];
  errorMessage.textContent = "";
}

function calculateInput(num2) {
  num2 = secondNumber;
  if (result > Number.MAX_VALUE) {
    errorMessage.textContent = "Number is larger than the max value!";
    errorMessage.removeAttribute("hidden");
  }
  
  if (operation === "+") {
    result = firstNumber + secondNumber;
    display.value = result;
  } else if (operation === "-") {
    result = firstNumber - secondNumber;
    display.value = result;
  } else if (operation === "*") {
    result = firstNumber * secondNumber;
    display.value = result;
  } else if (operation === "/" && num2 === 0) {
    errorMessage.textContent = "Cannot divide by zero";
    errorMessage.removeAttribute("hidden");
  } else if (operation === "/") {
    result = firstNumber / secondNumber;
    display.value = result;
  }
}
