import React from 'react'
import './card.css'
import { Avatar } from '@mui/material'


const Card = ({ name, imgSrc, value }) => {
  const verify = () => {

  };
  return (
    <div className="farmeasy__card">
      <div className="farmeasy__card-img">
        <img src= {imgSrc} alt="" />
      </div>
      <div className="farmeasy__card-name">
        <p>{name}</p>
      </div>
      <div className="farmeasy__card-name__button">
        <button onClick={verify}>Verify</button>
      </div>
    </div>
  )
}

export default Card