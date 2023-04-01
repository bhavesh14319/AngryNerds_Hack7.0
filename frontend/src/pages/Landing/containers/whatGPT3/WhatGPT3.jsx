import React from 'react'
import './whatGPT3.css'
import possibility from '../possibility/Possibility'
import Possibility from '../possibility/Possibility'
import speed from '../../assets/speed.png'
import support from '../../assets/support.png'
import userfriendly from '../../assets/userfriendly.png'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__wgpt3 section__margin " id="wgpt3">
      <div className="gpt3__wgpt3-content">
        <div className="gpt3__wgpt3-content__what">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <p>What is Farm Easy?</p>
        </div>
        <div className="gpt3__wgpt3-content__answer">
          <p>The ultimate online destination for farmers to easily rent, buy, and sell high-quality farming tools and products. Simplifying farming, one click at a time.</p>
        </div>
      </div>
      <div className="gpt3__wgpt3-possibility">
        <div className="gpt3__wgpt3-possibility__para gradient__text">
          <p>Farm Easy comes with exciting features !!!</p>
        </div>
        <div className="gpt3__wgpt3-possibility__explore">
          <p><a href="#home">Explore our Products</a></p>
        </div>
      </div>
      <div className="gpt3__wgpt3-features">
        <div className="gpt3__wgpt3-features__chatbots">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-content__logo">

          </div>
          <div className="gpt3__wgpt3-features__chatbots-topic">
            <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={support}></img>
            </div>
            <p>24*7 customer support</p>
          </div>
          <div className="gpt3__wgpt3-features__chatbots-desc">
            <p>FarmEase provides 24/7 customer support to ensure that farmers have access to assistance whenever they need it. Whether you have questions about our rental services, need help placing an order, or have concerns about a product, our friendly and knowledgeable customer support team is always available to assist you.</p>
          </div>
        </div>
        <div className="gpt3__wgpt3-features__knowledgebase">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-features__knowledgebase-topic">
            <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={userfriendly}></img>
            </div>
            <p>User Friendly Platform</p>
          </div>
          <div className="gpt3__wgpt3-features__knowledgebase-desc">
            <p>FarmEase is designed with the user in mind, providing a seamless and user-friendly experience. Our intuitive platform allows farmers to easily browse, compare prices, and make informed decisions. With clear navigation and helpful resources, FarmEase ensures that farmers have a stress-free experience when renting, buying, or selling farming tools and products. </p>
          </div>
        </div>
        <div className="gpt3__wgpt3-features__education">
          <div className="gpt3__wgpt3-content__gradline"></div>
          <div className="gpt3__wgpt3-features__education-topic">
          <div className="gpt3__wgpt3-features__chatbots-img">
              <img src={speed}></img>
            </div>
            <p>Seamless Experience</p>
          </div>
          <div className="gpt3__wgpt3-features__education-desc">
            <p>FarmEase provides fast and efficient buying and selling services for farmers. With a vast inventory of high-quality farming products, our platform allows farmers to quickly and easily list their products for sale and connect with potential buyers. Similarly, our rental service provides fast access to the tools and equipment farmers need, with quick and easy checkout and delivery options.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhatGPT3