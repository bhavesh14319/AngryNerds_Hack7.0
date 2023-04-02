import React from 'react'
import './cta.css'

const CTA = () => {
  return (
    <div className="gpt3__cta section__margin">
      <div className="gpt3__cta-info">
        {/* <p className="gpt3__cta-info__early">
          Request Early Access to Get Started
        </p> */}
        <p style={{animationName:  'wipe-in-right',animationDuration: '2s'}} className="gpt3__cta-info__register">
          Register on FarmEase today and experience the convenience and benefits of our rental services, high-quality products, and expert support for yourself.
        </p>
      </div>
      <div className="gpt3__cta-getstart">
        <button type = "button">
          Register Now
        </button>
      </div>
    </div>
  )
}

export default CTA