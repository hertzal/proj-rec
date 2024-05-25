import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecipe = { name, cuisine, photo, ingredients, preparation };
    addRecipe(newRecipe);
    setName('');
    setCuisine('');
    setPhoto('');
    setIngredients('');
    setPreparation('');
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="cuisine">Cuisine:</label>
        <input type="text" name="cuisine" value={cuisine} onChange={(e) => setCuisine(e.target.value)} />
      </div>
      <div>
        <label htmlFor="photo">Photo URL:</label>
        <input type="url" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients:</label>
        <textarea name="ingredients" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      </div>
      <div>
        <label htmlFor="preparation">Preparation:</label>
        <textarea name="preparation" value={preparation} onChange={(e) => setPreparation(e.target.value)} />
      </div>
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;
