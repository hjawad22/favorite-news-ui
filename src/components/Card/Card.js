import React from "react";
import '../Card/Card.css'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";


const Card = ({ title, description, urlToImage, publishedAt }) => {
    return (
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={`/details/${title}`}>
        <div className='card-container'>
            <div className="image-container">
                <img className='card-image' src={urlToImage} alt={title} />
            </div>
            <div className='card-details'>
                <p className="card-date words">Date: {publishedAt}</p>
                <p className='card-title words'>{title}</p>
                <p className='card-description words'>{description}</p>
            </div>
        </div>
        </NavLink>
    )
}

export default Card;