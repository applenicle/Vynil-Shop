import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__menu">
          <Link to="/" className="header__logo">
            Logo
          </Link>
          <ul className="header__list">
            <li className="header__item">
              <Link to="/Catalog" className="header__link">
                Каталог
              </Link>
            </li>
            <li className="header__item">
              <Link to="/trade" className="header__link">
                Возврат / Обмен
              </Link>
            </li>
            <li className="header__item">
              <Link to="/contacts" className="header__link">
                Контакты
              </Link>
            </li>
            <li className="header__item">
              <Link to="/delevery" className="header__link">
                Оплата и доставка
              </Link>
            </li>
          </ul>
          <Link to="/signin" className="header__btn">
            Войти
          </Link>
          <Link to="/signup" className="header__btn">
            Зарегистрироваться
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
