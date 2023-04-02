import React from 'react'
import './blog.css'
import {Article} from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const blogData = [
  {
    img: blog02,
    date : "26 Sep 2021", 
    title : "7 Tips To Get The Best Wheat Produce",
    link : "https://mahadhan.co.in/7-tips-get-best-wheat-produce/"
  },
  {
    img: blog03,
    date : "26 Sep 2021", 
    title : "Potato Disease and Symptom",
    link : "https://mahadhan.co.in/potato-diseases-symptoms/"
  },
  {
    img: blog04,
    date : "26 Sep 2021", 
    title : "Cotton Farming – The Success Story",
    link : "https://mahadhan.co.in/cotton-farming-success-story/"
  },
  {
    img: blog05,
    date : "26 Sep 2021", 
    title : "Why is soil testing important for banana farming?",
    link : "Why Is Soil Testing Important For Banana Farming?"
  },

];

const arti_desc = "We understand that as a farmer, you want to ensure that your crops grow and yield a healthy harvest. One crucial aspect of achieving this goal is by properly applying fertilizers. However, it's easy to make mistakes when it comes to fertilization, which could lead to wasted resources, reduced yields, or even harm to the environment.";

const Blog = () => {
  return (
    <div className="gpt3__blog  section__padding" id = "blog">
      <div className="gpt3__blog-title gradient__text " style={{animationName:  'wipe-in-right',animationDuration: '2s'}}>
        <p>Read Exclusive Blogs on Farming </p>
      </div>
      <div className="gpt3__blog-article__container" style={{animationName:  'polygon-in-opposing-corners',animationDuration: '2s'}}>
        <div className="gpt3__blog-article__container-1">
          <Article  imgSrc = {blog01} desc = {arti_desc} date = "26 Sep, 2021" imgLink = {'https://mahadhan.co.in/7-tips-get-best-wheat-produce/'} title = "5 Mistakes Farmers Should Avoid While Applying Fertilisers"/>
        </div>
        <div className="gpt3__blog-article__container-2" style={{animationName:  'polygon-in-opposing-corners',animationDuration: '2s'}}>
          {blogData.map((item, index) => (
            <Article imgSrc={item.img} date={item.date} title={item.title} key={item.img + index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog