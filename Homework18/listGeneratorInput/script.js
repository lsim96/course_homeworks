let color = document.getElementById("color");
let fontSize = document.getElementById("fontSize");
let items = document.getElementById("items");

let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  let ul = document.createElement("ul");
  ul.style.backgroundColor = color.value;
  ul.style.fontSize = fontSize.value + "rem";

  const arrItems = items.value.split(",");
  for (let i = 0; i < arrItems.length; i++) {
    let li = document.createElement("li");
    li.textContent = arrItems[i];
    ul.appendChild(li);
  }
  document.getElementById("header").appendChild(ul);
});
