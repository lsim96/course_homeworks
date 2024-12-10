function compareStrings(string1, string2) {
  if (string1.length === string2.length) {
    return true;
  } else {
    return false;
  }

  //   return string1.length === string2.length ? true : false;
}

console.log(compareStrings("AB", "CD"));
console.log(compareStrings("ABC", "DE"));
console.log(compareStrings("hello", "sedc"));
