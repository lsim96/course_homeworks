$(document).ready(function () {
  $("#greetBtn").click(function () {
    let input = $("#nameInput").val();
    if (input) {
      $("#result").text("Hello there " + input + "!");
    } else {
      $("#result").text("We need a name!");
    }
  });
});
