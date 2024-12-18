function parNumArray(array, num) {
  for (let i = 0; i < array.length; i++)
    if (array[i] === num) {
      return true;
    }
  return false;
}

console.log(parNumArray([1, 2, 3, 4, 5], 3));
console.log(parNumArray([1, 1, 2, 1, 1], 3));
console.log(parNumArray([], 5));
