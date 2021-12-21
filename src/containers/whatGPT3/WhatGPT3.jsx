import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Om Vakansa" text="Vakansas plattform ha som mål att råda bot på detta genom att hjälpa aktörerna i samhället att börja dela på sina lokaler. Dela på kostnaderna och skapa livsamt rörelse i områden där de verkar."/>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">90% av lokaler i städer är tomma</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Hyra" text="Dela på hyran genom att samnyttja lokaler med andra." />
      <Feature title="Tillgänglighet" text="Ge föreningslivet, kulturlivet och civilsamhället tillgång till billiga lokaler i våra städer" />
      <Feature title="Bidra du med" text="Hjälp oss skapa områden som sprudlar av liv och aktivitet under dygnets alla timmar." />
    </div>
  </div>
);

export default WhatGPT3;