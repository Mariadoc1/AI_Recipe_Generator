function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: "Recipe will appear here",
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
