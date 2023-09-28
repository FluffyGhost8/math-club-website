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
          imgAlt="SMT"
          title="SMT"
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
      </div>
      <div className="ccc">
      <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="SMMT"
          title="SMMT"
          description="A summer contest created and hosted by the MSJ math club. You may choose between two individual competitive-math focused exams, separated into two divisions: Warrior and Champion. The Warrior division will be similar in difficulty to the AMC 10, and the Champion division will be similar in difficulty to the AIME. For the two other rounds, you may form a team of up to 4 people, or ask us to help you form a team. We’ll have an Estimathon round, which will consist of 15 Fermi style estimation questions. We’ll also have a Guts round, where your team will attempt to solve 27 competition-math style problems divided into 9 sets of 3, one set at a time. For more information, please join our Discord (linked on the website below) and check out the info docs & problems under each year's contest. The contest will be held on ContestDojo and proctored on Zoom, but announcements will be sent through the Discord and by email. We look forward to seeing you (virtually) at SMMT! "
          buttonText="Learn more about the SMMT here"
          link="https://mathclubmsj.wixsite.com/smmt/"
        />
        <Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="MMT"
          title="MMT"
          description="Individual Round \n
          The individual round will be 15 problems long and span 60 minutes with problems from all fields of math, and the problems will range in difficulty from early AMC to mid AIME level. Results from the individual round will help to determine future college contest teams. Additionally, the top three individual scorers will all receive cash prizes. \n \n
          
          Estimathon Round(Teams) \n
          The estimathon round will be 15 problems long and span 45 minutes. Some estimathon questions you can expect to encounter are sussy things like the following question: \n \n
          
          If you stacked Among Us characters, how many of them would you need to reach the Sun from Earth? \n \n
          
          and many similar ones like it. You will be able to form teams of at most three people, and you can discuss and laugh with your teammates about all sorts of cursed estimates during the round. More details about the logistics of the estimathon round(such as scoring/answer input) will be elaborated on in the future. Top teams will receive FREE BOBA as their prize! \n \n
          Grand Finale: 1/27/22: Food Guts Round(Teams) \n
          The Food Guts round will be 24 questions over 45 minutes, and you can form teams of up to three. The questions will start off very, very easy (like arithmetic easy) and will ramp up to a mid-late AMC level. Here's what 'food guts' means: the 24 questions will be divided up into 8 'sets', and each set will contain 3 problems on it. At the start of the contest, you'll only get Set 1, and once you think you've solved as many as you can on Set 1, you can turn it in to get Set 2. The catch is: for every few problems your team solves, you will get FOOOOOOOOOOOOOOD!!!!!!!!!!!!!!! That's right: once your team has solved 2 problems, you'll get a prize. Once you solve 4, you'll get another prize. As a little sneak peek into the prizes we have planned, our very first prize at the two problem benchmark will be a bag of chips for each team member! All the sets will be graded live on the , and each of the members on the winning team will receive tons and tons of FREE BOBA!"
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