import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"; // Importing initial recipe data

function App() {
  const [recipes, setRecipes] = useState(RecipeData); // Initialize recipes state with initial data

  const addRecipe = (recipe) => {
    setRecipes([...recipes, recipe]); // Add new recipe to the recipes state
  };

  const deleteRecipe = (index) => {
    const newRecipes = recipes.filter((_, i) => i !== index); // Filter out the recipe at the given index
    setRecipes(newRecipes); // Update recipes state
  };

  return (
    <div className="App">
      <h1>Delicious Food Recipes</h1>
      <RecipeCreate addRecipe={addRecipe} />
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default App;
