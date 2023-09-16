import React from 'react';
import './feature.css';

const Feature = ({ title, text, link, ltext, tgt }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}<a href={link} style={{'text-decoration': 'underline'}} target={tgt} >{ltext}</a></p>
    </div>
  </div>
);

export default Feature;