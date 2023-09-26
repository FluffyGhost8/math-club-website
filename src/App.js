import React from 'react';

import { Footer, Blog, WhatGPT3, Header } from './containers';
import { Navbar, Team } from './components';
import { Card } from './components/card/Card'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => (
  <Router>
      <Routes>
          <Route exact path='/' element={<div className="App">
          <div className="navbar__bg">
          <Navbar />
          </div>
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatGPT3 />
    <Blog />
    <Footer />
  </div>} />
          <Route path='/home' element={<div className="App">
          <div className="navbar__bg">
          <Navbar />
          </div>
    <div className="gradient__bg">
      <Header />
    </div>
    <WhatGPT3 />
    <Blog />
    <Footer />
  </div>} />
          <Route path='/lectures' element={<div className="App">
          <div className="navbar__bg">
          <Navbar />
          </div>
    <Blog />
    <Footer />
  </div>} />
          <Route path='/contests' element={<div className="App">
          <div className="navbar__bg">
          <Navbar />
          </div>
          <div className="ccc">
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="SMMT"
          title="SMMT"
          description="A high-school contest hosted and created by students at Stanford University. We send a few teams to participate in-person at this tournament each year. "
          buttonText="Learn more about the SMT here"
          link="https://www.stanfordmathtournament.com/"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="BMT"
          title="BMT"
          description="A high-school contest hosted and created by students at the University of California, Berkeley. Similar to the SMT, we send a few teams to participate in-person each year."
          buttonText="Learn more about the BMT here"
          link="https://bmt.berkeley.edu/"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="SMMT/MMT"
          title="SMMT/MMT"
          description="Contests created and hosted by the MSJ math club officers. kms "
          buttonText="Learn more about the SMMT here"
          link="https://mathclubmsj.wixsite.com/smmt/"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="CAML"
          title="CAML"
          description="a"
          buttonText="Learn more abou the CAML here"
          link="https://mathleague.com/"
        />
      </div>
    <Footer />
  </div>} />
          <Route path='/about-us' element={<div className="App">
          <div className="navbar__bg">
          <Navbar />
          </div>
    <Team />
    <Footer />
  </div>} />
      </Routes>
  </Router>
);

export default App;