let header = document.getElementById("header");
let textSizeInput = document.getElementById("textSize");
let colorTypeInput = document.getElementById("colorType");
let btn = document.getElementById("generateBtn");

let firstInput = (element, color = "black") => {
  element.style.color = color;
};

let secondInput = (element, textSize = 24) => {
  element.style.fontSize = `${textSize}px`;
};

btn.addEventListener("click", () => {
  let textSize = textSizeInput.value || 24;
  let colorInput = colorTypeInput.value || "black";

  firstInput(header, colorInput);
  secondInput(header, textSize);
});
