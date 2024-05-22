import React from 'react'
import './index.css'
import Child from './Child'

const cm={
  name:"YS Jagan",
  Age:21,
  City:"Pulivendula",
  Profession:"Politican",
  Current:"CM"
}



function App() {
  return (
    <div className='container'>

      
<Child cmr={cm}/>


    </div>
  )
}

export default App