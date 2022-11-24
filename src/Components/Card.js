import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../cart.svg';

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
          </div>
          <div className="card__price">
            <div className="card__price-text">
              <span>Цена :</span>
              <h3>{price} ₽</h3>
            </div>
            <div>
              <img src={cart} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
