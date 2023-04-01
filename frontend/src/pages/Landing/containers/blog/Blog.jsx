import React from 'react'
import './blog.css'
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const blogData = [
  {
    img: blog02,
    date : "26 Sep 2021", 
    title : "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    img: blog03,
    date : "26 Sep 2021", 
    title : "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    img: blog04,
    date : "26 Sep 2021", 
    title : "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },
  {
    img: blog05,
    date : "26 Sep 2021", 
    title : "GPT-3 and Open  AI is the future. Let us explore how it is?"
  },

];

const Blog = () => {
  return (
    <div className="gpt3__blog  section__margin" id = "blog">
      <div className="gpt3__blog-title gradient__text ">
        <p>A lot is happening, We are blogging about it.</p>
      </div>
      <div className="gpt3__blog-article__container">
        <div className="gpt3__blog-article__container-1">
          <Article imgSrc = {blog01} date = "26 Sep, 2021" title = "GPT-3 and Open  AI is the future. Let us explore how it is?"/>
        </div>
        <div className="gpt3__blog-article__container-2">
          {blogData.map((item, index) => (
            <Article imgSrc={item.img} date={item.date} title={item.title} key={item.img + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog