import React from 'react';
import people from '../../assets/people.png';
import yeah from '../../assets/yeah.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Dela tomma lokaler med Vakansa</h1>
      <p>och bygg ett mer hållbart samhälle</p>

      <h2 className="gradient__text">Var söker ni?</h2>
      <div className="gpt3__header-content__input">
        {/* <input type="email" placeholder="Your Email Address" /> */}
        <button type="button">Stockholm</button>
        <button type="button">Göteborg</button>
        <button type="button">Uppsala</button>
        <button type="button">Välj kommun</button>
      </div>

      <h2 className="gradient__text">Typ av lokal</h2>
      <div className="gpt3__header-content__input">
        <button type="button">Kontorslokal</button>
        <button type="button">Samlingslokal</button>
        <button type="button">Idrottshall</button>
        <button type="button">Alla lokaler</button>
      </div>

      <h2 className="gradient__text">När?</h2>
      <div className="gpt3__header-content__input">
        <button type="button">Idag</button>
        <button type="button">Imorgon</button>
        <button type="button">Välj datum</button>
      </div>


      {/* <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div> */}
    </div>

    

    <div className="gpt3__header-image">
      <img src={yeah} />
    </div>
  </div>
);

export default Header;