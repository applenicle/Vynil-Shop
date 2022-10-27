import React from 'react';

const Card = ({ price, imageUrl, title, country }) => {
  return (
    <div className="card__content">
      <div>
        <img className="card__img" src={imageUrl} alt="Виниловая пластинка" />
      </div>
      <div>
        <span className="card__country">{country}</span>
        <p className="card__text">{title}</p>
        <div className="card__price">
          <span>{price} ₽</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
