import React from 'react';

import { Footer, Blog, WhatGPT3, Header } from './containers';
import { Brand, Navbar, Team } from './components';
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
    <WhatGPT3 />
    <Brand />
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