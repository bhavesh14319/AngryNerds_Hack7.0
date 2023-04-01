import React from 'react'
import './possibility.css'
import image from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding " id = "possibility">
      <div className="gpt3__possibility-vrphoto">
        <img src={image} alt='possibility'></img>
      </div>
      <div className="gpt3__possibility-info">
        <p className="gpt3__possibility-info__early1">
          Request Early Access To Get Started
        </p>
        <p className="gpt3__possibility-info__possibilities gradient__text">
          The possibilities are beyond your imagination
        </p>
        <p className="gpt3__possibility-info__text">
          Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
        </p>
        <p className="gpt3__possibility-info__early2">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  )
}

export default Possibility