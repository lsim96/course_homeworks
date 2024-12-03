let input = prompt("Amount of money");

if (input === null) {
  console.log(input);
} else {
  let number = parseInt(input);

  if (Number.isNaN(number)) {
    alert("Please enter a valid number");
  }
  if (number >= 100) {
    alert("You should consider investing in Nvidia.");
  } else if (number >= 75) {
    alert("Consider putting it towards Christmas.");
  } else if (number >= 35) {
    alert("Save it for the upcoming weekend");
  } else {
    alert("Just hold on to it...");
  }

  console.log(number);
}
