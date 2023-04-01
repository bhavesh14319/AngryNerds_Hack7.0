import React from "react";
import {Blog,Features,Footer,Header,Possibility,WhatGPT3} from "./containers";
import { Article, Brand, CTA, Feature, Navbar } from "./components";
import './Landing.css'
import './index.css'

function Landing() {
  return (
    <div className="Landing">
      <div className="gradient__bg">
        {/* <Navbar /> */}
        <Header />
      </div>
      <Brand />
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
