import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Login from './components/pages/Login'


function App() {
  const [count, setCount] = useState(0)
 
  return (
    <>
      <center>
     
      </center>
     <Home/>
     <Login/>

    </>
  )
}




export default App
