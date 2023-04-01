import React from 'react'
import './links.css'

const Links = ({title, linkList}) => {
  return (
    <div className="gpt3__links">
        <div className="gpt3__links-title">
            <p>{title}</p>
        </div>
        <div className = "gpt3__links-list">
           {linkList.map((value) => (
            <a>{value}</a>
           ))}
        </div>
    </div>
  )
}

export default Links