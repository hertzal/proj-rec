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
    <form name="create" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "row", gap: "10px", width: "100%", flexWrap: "wrap" }}>
      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", width: "100%" }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ flex: 1}}
        />
        <input
          type="text"
          name="cuisine"
          placeholder="Cuisine"
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          style={{ flex: 1}}
        />
        <input
          type="url"
          name="photo"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
          style={{ flex: 1}}
        />
        <textarea
          name="ingredients"
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          style={{ flex: 1}}
        />
        <textarea
          name="preparation"
          placeholder="Preparation"
          value={preparation}
          onChange={(e) => setPreparation(e.target.value)}
          style={{ flex: 1}}
        />
        <button type="submit" style={{ alignSelf: "flex-start" }}>Create</button>
      </div>
    </form>
  );
}

export default RecipeCreate;
