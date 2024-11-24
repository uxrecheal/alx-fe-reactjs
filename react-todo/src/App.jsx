import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TodoList />
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          <h1>Welcome to my react application</h1>
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App