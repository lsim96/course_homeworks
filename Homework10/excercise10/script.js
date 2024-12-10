function isTruthy(input) {
  if (
    input === false ||
    input === null ||
    Number.isNaN(input) ||
    input === undefined ||
    input === 0 ||
    input === ""
  ) {
    return 0;
  } else {
    return 1;
  }
}

console.log(isTruthy(0));
console.log(isTruthy(false));
console.log(isTruthy(""));
console.log(isTruthy("false"));
console.log(isTruthy(NaN));
