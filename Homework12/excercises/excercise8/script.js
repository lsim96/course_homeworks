function multiplyValues(array) {
  let multipliedArray = [];
  for (let num of array) {
    multipliedArray.push(num * array.length);
  }
  return multipliedArray;
}

console.log(multiplyValues([2, 3, 1, 0]));
console.log(multiplyValues([4, 1, 1]));
console.log(multiplyValues([1, 0, 3, 3, 7, 2, 1]));
console.log(multiplyValues([0]));
