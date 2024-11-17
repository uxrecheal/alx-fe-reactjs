 // RecipeList component
 import useRecipeStore from "./recipeStore";
 import { Link } from "react-router-dom";

 const RecipeList = () => {
   const recipes = useRecipeStore(state => state.filteredRecipes);

   return (
     <div>
       {recipes.map(recipe => (
         <div key={recipe.id}>
           <h3>{recipe.title}</h3>
           <p>{recipe.description}</p>
           <Link to={`/recipes/${recipe.id}`}>View Details</Link>
         </div>
       ))}
     </div>
   );
 };
 export default RecipeList;