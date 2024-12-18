function oddUpEvenDown(array) {
  let transform = [];
  for (i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      transform.push(array[i] - 1);
    } else {
      transform.push(array[i] + 1);
    }
  }
  return transform;
}

console.log(oddUpEvenDown([1, 2, 3, 4, 5]));
console.log(oddUpEvenDown([3, 3, 4, 3]));
console.log(oddUpEvenDown([2, 2, 0, 8, 10]));
