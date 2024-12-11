import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function RecipeDetail() {
  const { id } = useParams(); // Get the recipe ID from the URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Fetch the recipe details from data.json
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((r) => r.id === parseInt(id));
        setRecipe(foundRecipe);
      })
      .catch((error) => console.error('Error fetching recipe:', error));
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Loading recipe details...</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg w-full h-64 object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.summary}</p>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Ingredients:</h2>
        <ul className="list-disc pl-5 mb-4">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index} className="text-gray-600">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Instructions:</h2>
        <p className="text-gray-600">{recipe.instructions}</p>
        <Link
          to="/"
          className="block mt-6 text-center text-blue-600 hover:text-blue-800 underline"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
