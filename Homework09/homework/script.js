let userInput = prompt("Enter Birth year");
let yearOfBirth = parseInt(userInput);

let calculateYear = (yearOfBirth - 4) % 12;

if (Number.isNaN(yearOfBirth)) {
  alert("Please enter a valid year");
}
if (calculateYear === 0) {
  alert("You are a Rat in the Chinese Zodiac!");
} else if (calculateYear === 1) {
  alert("You are an Ox in the Chinese Zodiac");
} else if (calculateYear === 2) {
  alert("Your are a Tiger in the Chinese Zodiac!");
} else if (calculateYear === 3) {
  alert("Your are a Rabbit in the Chinese Zodiac!");
} else if (calculateYear === 4) {
  alert("Your are a Dragon in the Chinese Zodiac!");
} else if (calculateYear === 5) {
  alert("Your are a Snake in the Chinese Zodiac!");
} else if (calculateYear === 6) {
  alert("Your are a Horse in the Chinese Zodiac!");
} else if (calculateYear === 7) {
  alert("Your are a Goat in the Chinese Zodiac!");
} else if (calculateYear === 8) {
  alert("Your are a Monkey in the Chinese Zodiac!");
} else if (calculateYear === 9) {
  alert("Your are a Rooster in the Chinese Zodiac!");
} else if (calculateYear === 10) {
  alert("Your are a Dog in the Chinese Zodiac!");
} else if (calculateYear === 11) {
  alert("Your are a Pig in the Chinese Zodiac!");
} else {
  alert("Incorect input");
}

console.log(calculateYear);
