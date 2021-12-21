import React from 'react';
import './possibility.css';
import hittalokal from '../../assets/hittalokal.png';
import valjtider from '../../assets/valjtider.png';
import besked from '../../assets/besked.png';
import borja from '../../assets/borja.png';

const Possibility = () => (
  <div className="gpt3__possibility section__padding">
    
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">Så fungerar Vakansa</h1>
      <p>Vakansa ser till att skapa nya möjligheter att använda byggnader och lokaler genom att identifiera tidsvakanser</p>
    </div>
    <div className='icons'>
      <div className='icon'>
        <img src={hittalokal} />
        <p>Sök efter lokal</p>
      </div>

      <div className='icon'>
        <img src={valjtider} />
        <p>Välj de tider du är intresserad av att hyra</p>
      </div>
      <div className='icon'>
      <img src={besked} />
      <p>Vänta in besked från oss & gå på visning</p>
      </div>
      <div className='icon'>
      <img src={borja} />
      <p>Nu kan du börja använda lokalen!</p>
      </div>
    </div>
  </div>
);

export default Possibility;