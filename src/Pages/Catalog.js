import React from 'react';
import axios from 'axios';
import { Card, Header, Footer, Categories } from '../Components';

const Catalog = () => {
  const [item, setItem] = React.useState([]);
  const [category, setCategory] = React.useState(0);

  const ChangeCategory = React.useCallback((numberCategory) => {
    setCategory(numberCategory);
  }, []);

  React.useEffect(() => {
    const categories = category > 0 ? `category=${category}` : '';
    axios.get(`https://62c96901d9ead251e8bb4e90.mockapi.io/f?${categories}`).then((data) => {
      console.log(data.data);
      return setItem(data.data);
    });
  }, [category]);

  return (
    <div>
      <Header />
      <div className="container">
        <Categories category={category} onClickCategory={ChangeCategory} />
        <h3 className="card__title">Пластинки</h3>
        <div className="card__wrapper">
          {item.map((obj) => (
            <Card className="card__inner" key={obj.id} {...obj} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
