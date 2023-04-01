import React from "react";
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from "./containers";
import { Article, Brand, CTA, Feature } from "./components";
import Navbar from '../../components/navbar/Navbar'
import './Landing.css'
import './index.css'

function Landing() {
  return (
    <div className="Landing">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default Landing;
