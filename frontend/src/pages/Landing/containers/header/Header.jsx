import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">

      <div className="gpt3__header-content" >
        <h1 className="gpt3__header-content__text " style={{animationName:  'wipe-in-right' 
,
  animationDuration: '2s'}}>
          Farm Easy is the one-stop solution for all your farming needs
        </h1>
        <p style={{animationName:  'wipe-in-right' 
,
  animationDuration: '2s'}}>
          The go-to website for renting farm tools and buying/selling farming products.
        </p>
        <div className="gpt3__header-content__input">
          {/* <input type="email" placeholder='Your Email Address'></input> */}
          <button type="button">Get Started</button>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt='people' ></img>
          <p>More than 1000 farmers are linked with us</p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} alt='ai image' style={{animationName:  'square-in-center',animationDuration: '2s'}}></img>
      </div>
    </div>
  )
}

export default Header