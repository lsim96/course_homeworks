function takesNumber(num) {
  let array = [];
  for (let i = 1; i <= num; i++) {
    array.push(i);
  }
  return array;
}

console.log(takesNumber(5));
console.log(takesNumber(10));
console.log(takesNumber(-5));
