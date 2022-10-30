import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <h6 className="footer__title">О нас</h6>
            <p>
              Интернет-магазин виниловых пластинок с доставкой по России. Новые и бу пластинки по
              отличным ценам. Всегда свежие поступления.
            </p>
          </div>
          <div>
            <h6 className="footer__title">Каталог</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Весь каталог
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Дополнительные услуги
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer__title">Нужна помощь?</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Доставка
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Самовывоз
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Оплата
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer__title">Нужна помощь?</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Доставка
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Самовывоз
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Оплата
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__rights">&copy; All right reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
