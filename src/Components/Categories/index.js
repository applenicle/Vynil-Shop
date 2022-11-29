import React from 'react';
import styles from './Categories.module.scss';

const categoriesItem = ['Все', 'Редкие издания', 'Последние поступление', 'Лучшие'];

const Categories = ({ category, onClickCategory }) => {
  return (
    <>
      <ul className={styles.CategoriesList}>
        {categoriesItem.map((obj, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={category === i ? styles.CategoriesItemActive : styles.CategoriesItem}
            key={i}>
            {obj}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
