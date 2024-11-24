import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegistrationForm from './components/RegistrationForm.jsx'
import formikForm from './components/formikForm.jsx'

const queryClient = new QueryClient();
function App() {
 

  return (
    <>
    <RegistrationForm />
    {/* <formikForm /> */}
     <h1>Welcome to Vite</h1>
      <p>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App