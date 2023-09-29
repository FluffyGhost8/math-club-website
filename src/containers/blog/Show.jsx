import React from 'react';
import Article from '../../components/article/Article';
import { arr } from '../../lect';
import './blog.css';

const Show = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">See our lectures here</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={arr[0][1]} text={arr[0][0]} />
      </div>
      <div className="gpt3__blog-container_groupB">
        {arr.slice(1, 3).map(([a, b]) => <Article imgUrl={b} text={a} />)}
      </div>
    </div>
  </div>
);

export default Show;