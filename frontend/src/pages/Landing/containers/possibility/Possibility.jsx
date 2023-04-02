import React from 'react'
import './possibility.css'
import image from '../../assets/possibility.png'

const Possibility = () => {
  return (
    <div className="gpt3__possibility  section__margin" id = "possibility">
      <div className="gpt3__possibility-vrphoto">
        <img style={{animationName:  'circle-in-top-right',animationDuration: '2s'}} src={image} alt='possibility'></img>
      </div>
      <div className="gpt3__possibility-info">
        <p className="gpt3__possibility-info__possibilities gradient__text">
        More than 1000 farmers are using are services
        </p>
        <p className="gpt3__possibility-info__text" style={{animationName:  'square-in-bottom-right',animationDuration: '2s'}}>
        . Our rental services, high-quality products, and user-friendly platform have helped farmers of all sizes and experience levels to save time and money, while achieving greater success. With 24/7 customer support, multilingual services, and fast buying and selling options, FarmEase is quickly becoming the go-to choice for farmers looking to simplify their farming operations. Join the thousands of satisfied farmers who are already using FarmEase today.
        </p>
        <p className="gpt3__possibility-info__early2">
          Request Early Access to Get Started
        </p>
      </div>
    </div>
  )
}

export default Possibility