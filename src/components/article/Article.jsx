import React from 'react';
import './article.css';

const Article = ({imgUrl, date, text, info, pris}) => (
    <div className='gpt3__blog-container_article'>
        <div className='gpt3__blog-container_article-image'>
            <img src={imgUrl} alt="blog_image" />
        </div>
        <div className='gpt3__blog-container_article-content'>
            <div>
                <p>{date}</p>
                <h3>{text}</h3>
                <p>{info}</p>
                <p>{pris}</p>
            </div>
            <p className='gradient__text'>Boka nu</p>
        </div>
    </div>
);

export default Article;