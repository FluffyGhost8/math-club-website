import React from 'react';
import Feature from '../../components/feature/Feature';
import Featureref from '../../components/feature/Featureref'
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Math Club?" text="We are dedicated to helping students learn more and be excited about math." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h4 className="gradient__text">What We Do</h4>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Featureref title="Lectures" text="We have weekly lectures on Thursday during lunch in room A2. We cover several fun and informative topics. See more " link="/lectures" ltext="here." />
      <Featureref title="Contests" text="We participate in contests such as SMT and BMT, and also host the SMMT and MMT. See more"  link="/contests" ltext="here." />
    </div>
  </div>
);

export default WhatGPT3;