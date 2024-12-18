// function arrayOfStrings() {
//   let array = ["Hello", "there", "students", "of", "SEDC", "!"];
//   console.log(array[0], array[1], array[2], array[3], array[4], array[5]);
//   return array;
// }

// arrayOfStrings();

function arrayOfStrings(arr) {
  let message = "";
  for (let i = 0; i < arr.length; i++) {
    message = message + arr[i] + " ";
  }
  return message;
}

let array = ["Hello", "there", "students", "of", "SEDC", "!"];
console.log(arrayOfStrings(array));
