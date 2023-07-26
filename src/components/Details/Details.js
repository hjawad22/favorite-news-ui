import React from 'react';
import { NavLink } from 'react-router-dom';
import './Details.css';

function Details({ singleArticle }) {
  const { title, publishedAt, content, urlToImage, url } = singleArticle;
  return (
    <section className='details-container'>
      <img className='details-image' src={urlToImage} alt={title} />
      <div className='details-info'>
        <h2 className='details-name'>{title}</h2>
        <p>{content}</p>
        <p>{publishedAt}</p>
        <a href={url} className='link'>source</a>
        <NavLink to="/"
          style={{ color: 'inherit', textDecoration: 'inherit' }}
          className='button-back'>Back to search results
        </NavLink>
      </div>
    </section>
  );
};

export default Details;