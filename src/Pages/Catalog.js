import React from 'react';
import axios from 'axios';
import Card from '../Components/Card';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
// import Sort from '../Components/Sort';
import Categories from '../Components/Categories';

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
      <Categories category={category} onClickCategory={ChangeCategory} />
      {/* <h3 className="card__title">Новинки</h3> */}
      <div className="card__inner">
        {item.map((obj) => (
          <Card className="card__inner" key={obj.id} {...obj} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
