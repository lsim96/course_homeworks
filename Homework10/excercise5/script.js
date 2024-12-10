function legsPerAnimal(chickens, cows, pigs) {
  let legsOfChicken = chickens * 2;
  let legsOfCows = cows * 4;
  let legsOfPigs = pigs * 4;
  let legsTotal = legsOfChicken + legsOfCows + legsOfPigs;
  return legsTotal;
}

console.log(legsPerAnimal(2, 3, 5));
console.log(legsPerAnimal(1, 2, 3));
console.log(legsPerAnimal(5, 2, 8));
