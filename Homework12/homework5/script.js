let array = [3, 5, 6, 8, 11];
function loopingArray(array) {
  let min = array[0];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
    if (array[i] > max) {
      max = array[i];
    }
  }
  let sum = min + max;
  return `Output: Max:${max}, Min:${min}, Sum:${sum}`;
}

console.log(loopingArray(array));
