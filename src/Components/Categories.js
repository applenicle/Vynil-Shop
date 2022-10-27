import React from 'react';

const categoriesItem = ['Все', 'Редкие издания', 'Последние поступление', 'Лучшие'];

const Categories = ({ category, onClickCategory }) => {
  return (
    <div>
      <ul className="filter__list">
        {categoriesItem.map((obj, i) => (
          <li
            onClick={() => onClickCategory(i)}
            className={category === i ? 'filter__item--active' : 'filter__item'}
            key={i}>
            {obj}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
