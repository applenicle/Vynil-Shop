import React from 'react';
import { Link } from 'react-router-dom';

const EmptyCart = () => {
  return (
    <div className="container container--cart tac">
      <h2>Ваша корзина пуста ☹</h2>
      {/* <img src={woman} alt="cart" /> */}
      <p className="empty__text">Добавьте что-нибудь, сделайте меня счастливым 😉</p>
      <Link className="empty__btn" to="/">
        Продолжить покупки
      </Link>
    </div>
  );
};

export default EmptyCart;
