import React from 'react'
import './card.css'


const Card = ({name, imgSrc}) => {
  return (
    <div className="farmeasy__card">
        <div className="farmeasy__card-img">
            <img src = {imgSrc} ></img>
        </div>
        <div className="farmeasy__card-name">
            <p>{name}</p>
            <div className="farmeasy__card-name__button">
              <button>Verify</button>
            </div>
        </div>
    </div>
  )
}

export default Card