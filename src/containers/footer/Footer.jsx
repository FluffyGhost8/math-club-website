import React from 'react';
import longo from '../../assets/longo.png';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links" style={{"text-align": "center", "flex-direction": "row"}}>
      <div className="gpt3__footer-links_logo" style={{"float": "left", "width": "50%"}}>
        <center>
          <img src={longo} alt="msj math logo" />
        </center>
      </div>
      <div className="gpt3__footer-links_div" style={{"float": "left", "width": "50%"}}>
        <h4>Links</h4>
        <p><a href="https://discord.gg/sFgfZuyThj" target="_blank">Discord</a></p>
        <p><a href="https://forms.gle/pCyCWAVtQdh6a64Z9" target="_blank">Mailing List</a></p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 MSJ Math Club. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;