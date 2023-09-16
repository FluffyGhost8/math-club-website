import React from 'react';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <center>
        <h2 className="white_header">Welcome to the</h2>
        <h1 className="white_header">MSJHS Math Club</h1>
        <div className="header__button">
          <form action="https://discord.gg/sFgfZuyThj" target="_blank">
            <button type="submit">Join the Discord</button>
          </form>
        </div>
      </center>
    </div>
  </div>
);

export default Header;