import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../cart.svg';
import styles from './Card.module.scss';

const Card = ({ price, imageUrl, title, country, id }) => {
  return (
    <div className={styles.card}>
      <Link to={`/details/${id}`}>
        <img className={styles.cardImage} src={imageUrl} alt={title} />
      </Link>
      <div className={styles.cardInner}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.cardPrice}>
          <div className={styles.cardText}>
            <span>Цена :</span>
            <h3>{price} ₽</h3>
          </div>
          <img className={styles.cardIcon} src={cart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
