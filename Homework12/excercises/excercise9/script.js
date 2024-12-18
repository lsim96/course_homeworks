function hurdleJump(array, jumpHeight) {
  for (let i = 0; i < array.length; i++) {
    if (jumpHeight > array[i]) {
      return true;
    }
    return false;
  }
}

console.log(hurdleJump([1, 2, 3, 4, 5], 5));
console.log(hurdleJump([5, 5, 3, 4, 5], 3));
console.log(hurdleJump([5, 4, 5, 6], 10));
console.log(hurdleJump([1, 2, 1], 1));
