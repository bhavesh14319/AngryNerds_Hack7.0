import React from 'react'
import './brand.css'
import {google, slack, atlassian, dropbox, shopify} from './imports'; 

const Brand = () => {
  return (
    <div className = 'gpt3__brand section__padding'>
        <div className="gpt3__brand-image"><img src = {google}></img></div>
        <div className="gpt3__brand-image"><img src = {slack}></img></div>
        <div className="gpt3__brand-image"><img src = {atlassian}></img></div>
        <div className="gpt3__brand-image"><img src = {dropbox}></img></div>
        <div className="gpt3__brand-image"><img src = {shopify}></img></div>
    </div>
  )
}

export default Brand