// function differenceBetween(array) {
//   let minInArray = array[0];
//   let maxInArray = array[0];
//   for (let i = 1; i <= array.length; i++) {
//     if (array[i] < minInArray) {
//       minInArray = array[i];
//     } else if (array[i] > maxInArray) {
//       maxInArray = array[i];
//     }
//   }
//   console.log(`Smallest number is ${minInArray}, biggest is ${maxInArray}`);
//   return maxInArray - minInArray;
// }

// console.log(differenceBetween([10, 4, 1, 4, -10, -50, 32, 21]));
// console.log(differenceBetween([44, 32, 86, 19]));

//With infinity

function differenceBetween(array) {
  let minInArray = Infinity;
  let maxInArray = -Infinity;

  for (let num of array) {
    if (num < minInArray) {
      minInArray = num;
    } else if (num > maxInArray) {
      maxInArray = num;
    }
  }
  console.log(`Smallest number is ${minInArray}, biggest is ${maxInArray}`);
  return maxInArray - minInArray;
}

console.log(differenceBetween([10, 4, 1, 4, -10, -50, 32, 21]));
console.log(differenceBetween([44, 32, 86, 19]));
