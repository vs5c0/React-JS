import React from 'react'

const Child = (props) => {
    const {name,Age,City,Profession,Current}=props.cmr
  return (
    <div>
    <div>{name}</div>
    <div>{Age}</div>
    <div>{City}</div>
    <div>{Profession}</div>
    <div>{Current}</div>
    </div>
  )
}

export default Child