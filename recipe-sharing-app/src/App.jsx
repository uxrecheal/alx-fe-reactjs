import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import AddRecipeForm from "./components/AddRecipeForm.jsx";
import "./App.css";
import RecipeList from "./components/RecipeList.jsx";
import DeleteRecipeButton from "./components/DeleteRecipeButton.jsx";
import EditRecipeForm from "./components/EditRecipeForm.jsx";
import RecipeDetails from "./components/RecipeDetails.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        
        <AddRecipeForm />
        
        <RecipeList />

        <Routes>
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />

          <Route path="/recipe/edit/:recipeId" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
