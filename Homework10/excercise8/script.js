function caseInsensitive(string1, string2) {
  if (string1.toLowerCase() === string2.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}

console.log(caseInsensitive("hello", "hELLo"));
console.log(caseInsensitive("motive", "emotive"));
console.log(caseInsensitive("venom", "VENOM"));
console.log(caseInsensitive("mask", "mAskinG"));
