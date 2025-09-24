import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ id, name, image, desc }) => {
    return (
        <div className="card">
            <img src={image} alt={name} className="card-image" />
            <div className="card-content">
                <h3 className="card-title">{name}</h3>
                <p className="card-description">{desc}</p>
                <Link to={`/character/${id}`} className="card-link">
                    Learn More
                </Link>
            </div>
        </div>
    );
};

export default Card;