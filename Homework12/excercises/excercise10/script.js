function countDown(num) {
  let array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array.reverse();
}

console.log(countDown(5));
console.log(countDown(1));
console.log(countDown(0));
