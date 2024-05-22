
import {useState} from 'react';
const Sopr = () => {


    const [city, setCity]=useState("Hyderabad")
    
   if(city=="Hyderabad"){
    setCity("Bangalore")
   }
   

  return (
    <div>{city}</div>
  )
}

export default Sopr