import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ price, imageUrl, title, country, id }) => {
  return (
    <div className="card">
      <div className="card__content">
        <Link to={`/details/${id}`}>
          <img className="card__image" src={imageUrl} alt={title} />
        </Link>
        <div className="card__inner">
          <div className="card__text">
            <h3>{title}</h3>
            <span>{country}</span>
          </div>
          <div className="card__price">
            <h3>{price} ₽</h3>
            <span>
              <img src="https://cdn-icons-png.flaticon.com/512/679/679903.png" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
