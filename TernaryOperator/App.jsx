import React from 'react'
import { useState } from 'react'
import './App.css'
import './TernaryOperator/First'
import First from './Ternary/First'
const App = () => {

  const[sample,setSample]=useState(true)
  return (
    <div>
      <h1>Welcome to JC World</h1>
    
    
      {sample? <First/>:"Its false"}
    
    </div>
  )
}

export default App