import React from 'react';
import axios from 'axios';
import { Card, Footer, Categories, Header } from '../Components';
import { fetchItems } from '../redux/ItemSlice/asyncAction';
import { setCategory } from '../redux/CategorySlice/slice';
import { useDispatch, useSelector } from 'react-redux';
// import { appUrl } from '../network';

const Catalog = () => {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.ItemsReducer);
  const { category } = useSelector((state) => state.CategoryReducer);
  const ChangeCategory = React.useCallback((numberCategory) => {
    dispatch(setCategory(numberCategory));
  }, []);

  const getItems = async () => {
    const categories = category > 0 ? `category=${category}` : '';
    dispatch(
      fetchItems({
        categories,
      }),
    );
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    getItems();
    // axios.get(`${appUrl.APP_URL}/vynils`).then((res) => setItem(res.data));
  }, [category]);

  const vynils = items.map((obj) => <Card key={obj.id} {...obj} />);

  return (
    <div>
      <Header />
      <div className="container">
        <Categories category={category} onClickCategory={ChangeCategory} />
        <h3 className="card__title">Пластинки</h3>
        {status === 'error' ? (
          <div>Ошибка</div>
        ) : (
          <div className="wrapper">{status === 'loading' ? <>Loading</> : vynils}</div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Catalog;
