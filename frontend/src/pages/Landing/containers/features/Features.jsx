import React from 'react'
import './features.css'
import Feature from '../../components/feature/Feature';

const Features = () => {
  return (
    <div className="gpt3__features section__padding gradient__bg" id="features">
      <div className="gpt3__features-topic">
        <h1 className="gradient__text">Farm Easy Provides Oustanding Services To Buyers and Sellers !!</h1>
        <p></p>
      </div>
      <div className="gpt3__features-feature">
        <Feature title={"Buying and Renting Farming Equipments"} text={"FarmEase makes buying and renting high-quality farm equipment easy and affordable for farmers of all sizes and experience levels."} />
        <Feature title={"Multi Language Support"} text={"FarmEase offers its user-friendly website in both Hindi and English, ensuring that farmers from all regions have access to our services."} />
        <Feature title={"Browse and Filter"} text={"FarmEase allows farmers to easily browse through our extensive inventory of farming products and tools with customizable filters, making it easy to find exactly what you need. "} />
        <Feature title={"Chat with experts"} text={"Whether you have questions about our rental services, need help with an order, or have concerns about a product, our friendly and knowledgeable support staff is always available to assist you."} />
      </div>
    </div>
  )
}

export default Features