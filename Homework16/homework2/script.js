$(document).ready(function () {
  $("button").click(function () {
    let input = $("#textInput").val();
    let color = $("#colorInput").val();
    let errorMessage = "";

    $("#invalidResult").text("");

    if (input === "") {
      errorMessage = "Please enter some text";
    } else if (!/^#[0-9A-F]{6}$/i.test(color)) {
      errorMessage = "Please enter a valid color";
    }

    if (errorMessage) {
      $("#invalidResult").text(errorMessage);
    } else {
      $("#result").text(input).css("color", color);
    }
  });
});
