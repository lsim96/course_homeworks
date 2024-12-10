function plural(plr) {
  if (plr.endsWith("s")) {
    return true;
  } else {
    return false;
  }

  //   return plr.endsWith("s") ? true : false;
}

console.log(plural("changes"));
console.log(plural("change"));
console.log(plural("dudes"));
console.log(plural("magic"));
