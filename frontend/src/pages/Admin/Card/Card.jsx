import React from 'react'
import './card.css'
import { Avatar } from '@mui/material'


const Card = ({ name, imgSrc }) => {
  return (
    <div className="farmeasy__card">
      <div className="farmeasy__card-img">
        <Avatar sx={{ height: "100%", width: "100%", border: '1px solid' }} src={imgSrc} />
      </div>
      <div className="farmeasy__card-name">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Card