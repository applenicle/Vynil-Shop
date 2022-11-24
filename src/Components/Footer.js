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
            <h6 className="footer__title">FAQ</h6>
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
            <h6 className="footer__title">Наши социальные сети</h6>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F04%2Ftelegram-logo-circle-2048x2048.png&f=1&nofb=1&ipt=5da7ba83e46434539a1ef907ed8ba94c70ba546e73f6e8342360af8fff0d0823&ipo=images"
                    alt="tg"
                  />
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
