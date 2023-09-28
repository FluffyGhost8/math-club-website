import React from 'react';
import Article from '../../components/article/Article';
import { arr } from '../../lect';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">See our lectures here</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={arr[0][1]} text={arr[0][0]} />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={arr[1][1]} text={arr[1][0]} />
        <Article imgUrl={arr[2][1]} text={arr[2][0]} />
        <Article imgUrl={arr[3][1]} text={arr[3][0]} />
        <Article imgUrl={arr[4][1]} text={arr[4][0]} />
      </div>
    </div>
  </div>
);

export default Blog;