document
  .getElementById("numOfIngredients")
  .addEventListener("input", function () {
    let num = parseInt(this.value);
    let ingredienstInputDiv = document.getElementById("ingredientsInput");
    ingredienstInputDiv.innerHTML = "";

    for (let i = 1; i <= num; i++) {
      let label = document.createElement("label");
      label.setAttribute("for", "ingredient" + i);
      label.textContent = "Enter ingredient " + i + ": ";

      let input = document.createElement("input");
      input.type = "text";
      input.id = "ingredient" + i;
      ingredienstInputDiv.appendChild(label);
      ingredienstInputDiv.appendChild(input);
      ingredienstInputDiv.appendChild(document.createElement("br"));
    }
  });

function constructTheRecipe() {
  let nameOfRecipe = document.getElementById("nameOfRecipe").value;
  let numOfIngredients = parseInt(
    document.getElementById("numOfIngredients").value
  );
  let ingredients = [];

  for (let i = 1; i <= numOfIngredients; i++) {
    let ingredient = document.getElementById("ingredient" + i).value;
    if (ingredient) {
      ingredients.push(ingredient);
    } else {
      alert("Need to fill ingredient fields in order to generate recipe");
      return;
    }
  }

  let recipePageHTML = `<h2> ${nameOfRecipe}</h2><ul>`;
  for (let ingredient of ingredients) {
    recipePageHTML += `<li>${ingredient}</li>`;
  }
  recipePageHTML += `</ul>`;
  document.getElementById("recipePage").innerHTML = recipePageHTML;
}
