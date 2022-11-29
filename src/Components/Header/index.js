import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import styles from './Header.module.scss';

{
}

const Header = () => {
  return (
    <header className={styles.Header}>
      <div className="container">
        <div className={styles.HeaderInner}>
          <nav className={styles.HeaderMenu}>
            <ul className={styles.HeaderList}>
              <li className={styles.HeaderItem}>
                <Link to="/Catalog" className={styles.HeaderLink}>
                  Каталог
                </Link>
              </li>
              <li className={styles.HeaderItem}>
                <Link to="/Trade" className={styles.HeaderLink}>
                  Возврат
                </Link>
              </li>
            </ul>
          </nav>
          <Link to="/" className={styles.HeaderLogo}>
            <img src={logo} alt="logo" />
            MrPlastin4ka
          </Link>
          <nav className={styles.HeaderMenu}>
            <ul className={styles.HeaderList}>
              <li className={styles.HeaderItem}>
                <Link to="/contacts" className={styles.HeaderLink}>
                  Контакты
                </Link>
              </li>
              <li className={styles.HeaderItem}>
                <Link to="/Cart" className={styles.HeaderLink}>
                  Корзина
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
