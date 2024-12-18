let array = [23, 63, 95, 11, 5];

function arrayOfNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(arrayOfNumbers(array));

function validateNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Number.isNaN()) {
      console.log(arr[i]);
    } else {
      alert("Not a number!");
    }
  }
}

console.log(validateNumber(array));
