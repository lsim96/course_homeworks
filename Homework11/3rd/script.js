function withrawMoney() {
  let totalAmount = 5000;
  let input = prompt("Enter an amount");
  let withdraw = parseInt(input);

  if (withdraw > totalAmount) {
    alert("Not enough money");
    return null;
  } else if (withdraw <= totalAmount) {
    return `Withdrawed: ${withdraw} \n
    Account Balance: ${totalAmount - withdraw}`;
  } else {
    return "ERROR! Not a valid input";
  }
}

console.log(withrawMoney());
