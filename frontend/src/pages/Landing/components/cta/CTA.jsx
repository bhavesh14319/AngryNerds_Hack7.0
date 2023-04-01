import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className="gpt3__cta section__margin">
      <div className="gpt3__cta-info">
        <p className="gpt3__cta-info__early">
          Request Early Access to Get Started
        </p>
        <p className="gpt3__cta-info__register">
          Register today & start exploring the endless possiblities.
        </p>
      </div>
      <div className="gpt3__cta-getstart">
        <button type = "button">
          Get Started
        </button>
      </div>
    </div>
  )
}

export default CTA