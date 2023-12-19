function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instructions");
  let apiKey = "7odb1604cd5806418921397fa0t4e3ac";
  let prompt = `User instructions are: Generate a baking recipe about ${instructionInput.value}`;
  let context =
    "You are a baking expert and love to make lots of cakes, pastries, and desserts. Your mission is to generate a quick and easy baking recipe in basic HTML. Keep the instructions as short as possible. Make sure to follow the user instructions. Sign the bottom of the recipe with 'SheCodes AI' inside a <strong> element. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
