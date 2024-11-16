import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddRecipeForm from './components/AddRecipeForm,jsx/index.js'
import './App.css'
import RecipeList from './components/RecipeList.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Recipe Sharing App</h1>
<AddRecipeForm />
<RecipeList />
    </>
  )
}

export default App
