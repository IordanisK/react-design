import React from 'react';
import './features.css';
import Article from '../../components/article/Article';
import '../blog/blog.css';
import lokal1 from '../../assets/lokal1.png';
import lokal2 from '../../assets/lokal2.png';
import lokal3 from '../../assets/lokal3.png';

const Features = () => (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">Utforska tomma lokaler i Stockholm</h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupB">
          <Article imgUrl={lokal1} date="Sep 26, 2021" text="Samlingslokal" pris="300kr/h" info="Sto rymlig lokal, plats för allt"  />
          <Article imgUrl={lokal2} date="Sep 26, 2021" text="Kontorslokal" pris="700kr/h" info="Sto rymlig lokal, plats för allt" />
          <Article imgUrl={lokal3} date="Sep 26, 2021" text="Idrottshall" pris="500kr/h" info="Sto rymlig lokal, plats för allt" />
        </div>
      </div>
    </div>
);

export default Features;
