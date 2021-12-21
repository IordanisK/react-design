import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Länkar till olika sidor</h4>
        <p>Om oss</p>
        <p>Bli partner</p>
        <p>Blogg / Nyheter</p>
        <p>Allmänna vilkor</p>
        <p>Frågor / Svar</p>
        <p>Press</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Support</h4>
        <p>Support</p>
        <p>Lämna feedback</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Kontakta oss</h4>
        <p>Adress: Vakansa 1A</p>
        <p>Telefon: 0700-000 000</p>
        <p>email: vakansa@vakansa.vakansa</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Vakansa.</p>
    </div>
  </div>
);

export default Footer;