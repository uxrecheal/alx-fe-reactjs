import { useParams } from 'react-router-dom';
import  useRecipeStore  from './recipeStore';

const RecipeDetails = () => {
  const { recipeId } = useParams();  // Get recipeId from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId)) // Find recipe by ID
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
    </div>
  );
};

export default RecipeDetails;
