$(document).ready(function () {
  let input = $(".input");
  let result = $("#result");

  function calculateAverage(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    return Math.floor(sum / 3);
  }

  $("button").on("click", function () {
    let numOne = parseInt(input[0].value);
    let numTwo = parseInt(input[1].value);
    let numThree = parseInt(input[2].value);

    let avarage = calculateAverage(numOne, numTwo, numThree);
    if (avarage > 10) {
      result.text(avarage).css("color", "blue");
    } else {
      result.text(avarage).css("color", "red");
    }
  });
});
