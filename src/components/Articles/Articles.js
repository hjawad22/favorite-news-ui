import React from "react";
import Card from "../Card/Card";
import '../Articles/Articles.css'


const Articles = ({ articles }) => {
    return (
      <article className='articles-container'>
        {articles.map((article, index) => (
          <Card {...article} key={index} />
        ))}
      </article>
    );
  }
  
  export default Articles;