import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className="container">
        <div className={styles.FooterInner}>
          <div>
            <h6 className={styles.FooterTitle}>О нас</h6>
            <p>
              Интернет-магазин виниловых пластинок с доставкой по России. Новые и бу пластинки по
              отличным ценам. Всегда свежие поступления.
            </p>
          </div>
          <div>
            <h6 className={styles.FooterTitle}>Каталог</h6>
            <ul className={styles.FooterList}>
              <li className={styles.FooterItem}>
                <Link to="/Catalog" className={styles.FooterLink}>
                  Весь каталог
                </Link>
              </li>
              <li className={styles.FooterItem}>
                <Link to="/Contacts" className={styles.FooterLink}>
                  Дополнительные услуги
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className={styles.FooterTitle}>FAQ</h6>
            <ul className={styles.FooterList}>
              <li className={styles.FooterItem}>
                <Link href="/Cart" className={styles.FooterLink}>
                  Доставка
                </Link>
              </li>
              <li className={styles.FooterItem}>
                <Link href="/Cart" className={styles.FooterLink}>
                  Самовывоз
                </Link>
              </li>
              <li className={styles.FooterItem}>
                <Link to="/Cart" className={styles.FooterLink}>
                  Оплата
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className={styles.FooterTitle}>Наши социальные сети</h6>
            <ul className={styles.FooterList}>
              <li className={styles.FooterItem}>
                <Link href="#" className={styles.FooterLink}>
                  <img
                    src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpnggrid.com%2Fwp-content%2Fuploads%2F2021%2F04%2Ftelegram-logo-circle-2048x2048.png&f=1&nofb=1&ipt=5da7ba83e46434539a1ef907ed8ba94c70ba546e73f6e8342360af8fff0d0823&ipo=images"
                    alt="tg"
                  />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.FooterRights}>&copy; All right reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
