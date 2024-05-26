import React from 'react'
import { useState } from 'react'
const Click = () => {

const[number,setnumber]=useState(0)

const increment=()=>{
setnumber(number+1)
}
const decrement=()=>{
    setnumber(number-1)
    }
const reset=()=>{
    if(number<1)
    {
    setnumber(0)
    }
}

  return (
    <div>
        <h1>Welcome to On Click Events 
           
        </h1>
       <h1> {number}</h1>
        <br /><br />
        <button onClick={increment}>Increment</button>
        <br /><br />
        <button onClick={decrement}>Decrement</button>
        <br /><br />
        <button onClick={reset}>Reset</button>
        <br /><br />
    </div>
    
  )
}

export default Click