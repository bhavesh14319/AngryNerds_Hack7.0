import React from 'react'
import './footer.css'
import Links from '../../components/links/Links'
import logo from '../../assets/logo.svg'

const footerData = [
  {
    title: 'Links',
    subtitle: ['Overons', 'Social Media', 'Counters', 'Contact']
  },
  {
    title: 'Company',
    subtitle: ['Terms & Conditions', 'Privacy Policy', 'Contact']
  },
  {
    title: 'Get in Touch',
    subtitle: ['Crechterwoord K12 182 DK Alknjkcb', '085-132567', 'info@payme.net']
  },
]

const Footer = () => {
  return (
    <div className="gpt3__footer" id = "footer">
      <div className="gpt3__footer-title">
        <p>Hurry Up! and Take Your Farming To Next Level !</p>
      </div>
      <div className="gpt3__footer-early">
        <button type="button">Get Started</button>
      </div>
      <div className="gpt3__footer-about">
        <div className="gpt3__footer-about__topic">
          <img src = {logo} className="gpt3__footer-about__topic-name"></img>
          <p className="gpt3__footer-about__topic-desc">Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-about__container">
          {footerData.map((item, index) => (
            <Links title={item.title} linkList={item.subtitle} key={item.title + index} />
          ))}
        </div>
      </div>
      <div className="gpt3__footer-about__copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer