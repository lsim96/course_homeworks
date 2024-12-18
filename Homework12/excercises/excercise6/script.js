function negateNumbers(array) {
  let negatedArray = [];
  for (let i = 0; i < array.length; i++) {
    negatedArray.push(-+array[i]);
  }
  return negatedArray;
}

console.log(negateNumbers([1, 2, 3, 4]));
console.log(negateNumbers([-1, 2, -3, 4]));
console.log(negateNumbers([]));
