import React from 'react'
import './article.css'

const Article = ({ imgSrc, title, date }) => {
  return (
    <div className="gpt3__article">
      <img src={imgSrc} alt={title}></img>
      <div className="gpt3__article-content">
        <div className="gpt3__article-content__head">
          <p className = "gpt3__article-content__head-date">{date}</p>
          <p className='gpt3__article-content__head-title'>{title}</p>
        </div>
        <div className="gpt3__article-content__read">
          <p>Read Full Article</p>
        </div>
      </div>
    </div>
  )
}

export default Article