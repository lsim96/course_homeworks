let first = ["Bob", "Jill"];
let last = ["Gregory", "Wurtz"];

function twoSetsOfNames(first, last) {
  let fullNames = [];
  for (let i = 0; i < first.length; i++) {
    fullNames.push(`${i + 1}.${first[i]} ${last[i]}`);
  }
  return fullNames;
}

let full = twoSetsOfNames(first, last);
console.log(full);