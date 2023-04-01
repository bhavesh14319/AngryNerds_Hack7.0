import React from 'react'
import './article.css'

const Article = ({ imgSrc, title, date, desc }) => {
  return (
    <div className="gpt3__article">
      <img src={imgSrc} alt={title}></img>
      <div className="gpt3__article-content">
        <div className="gpt3__article-content__head">
          <p className = "gpt3__article-content__head-date">{date}</p>
          <p className='gpt3__article-content__head-title'>{title}</p>
          <p className="gpt3__article-content__head-desc">{desc}</p>
        </div>
        <div className="gpt3__article-content__read">
          <a href = "https://mahadhan.co.in/7-tips-get-best-wheat-produce/">Read Full Article</a>
        </div>
      </div>
    </div>
  )
}

export default Article