import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './CartItem.module.scss';
import { removeItem, addItem } from '../../redux/CartSlice/slice';

const CartComponent = ({ price, imageUrl, title, year }) => {
  // const [counter, setCounter] = React.useState(0);
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.CartReducer);
  return (
    <div className={styles.cartItem}>
      <div className={styles.cartImg}>
        <img src={imageUrl} alt="Vynil" />
      </div>
      <div className={styles.cartInfo}>
        <h3>{title}</h3>
        <p>{year}</p>
      </div>
      <div className={styles.cartCounter}>
        <button onClick={() => dispatch(removeItem(value))}>-</button>
        <b>{value}</b>
        <button onClick={() => dispatch(addItem(value))}>+</button>
      </div>
      <div className={styles.cartPrice}>
        <b>{price} ₽</b>
      </div>
      <div className={styles.cartRemove}>
        <svg
          width="10"
          height="10"
          viewBox="0 0 10 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
            fill="#fa586a"></path>
          <path
            d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
            fill="#fa586a"></path>
        </svg>
      </div>
    </div>
  );
};

export default CartComponent;
