import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/pages/Login'
import LandingPage from './components/views/LandingPage'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <center>
     
      </center>
     <Home/>
     <Login/>
    <LandingPage name="Markiv"/>
    </>
  )
}




export default App
