let array = ["Jane", "Leon", "Miki", "Lile", "Kocho"];

let ul = document.getElementById("ulMain");
let button = document.getElementById("btn");

button.addEventListener("click", function () {
  for (let i = 0; i < array.length; i++) {
    let li = document.createElement("li");
    li.textContent = array[i];
    ul.appendChild(li);
  }
});
