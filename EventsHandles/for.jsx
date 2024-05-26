import React from 'react'

import { useEffect,useState } from 'react'
const Handle = () => {

  const[screen,setScreen]=useState({
    width:window.innerWidth,
    height: window.innerHeight,
  });
  const updateScreen=()=>{
    setScreen({
      width:window.innerWidth,
    height: window.innerHeight,
    });
  };

  useEffect(()=>{
    window.addEventListener('resize',setScreen);
    return(()=>{
      window.removeEventListener('resize',setScreen);
    })
  })
  return (
    <div>
      <h1>Welcome to React Hooks Events</h1>
      <p>This is an one of the Events Listeners in React</p>
      <p style={{color:"Blue"}}>width:{setScreen.width}</p>
      <p style={{color:"Red"}}>width:{setScreen.height}</p>
    </div>
  )
}

export default Handle