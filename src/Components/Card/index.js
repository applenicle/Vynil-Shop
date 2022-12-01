import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import cart from '../../cart.svg';
import styles from './Card.module.scss';
import { addItem } from '../../redux/CartSlice/slice';

const Card = ({ id, price, imageUrl, title, year }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    const item = {
      id,
      price,
      imageUrl,
      title,
      year,
      count: 0,
    };
    dispatch(addItem(item));
  };

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
          <div className={styles.cardIcon}>
            <img onClick={addToCart} src={cart} alt="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
