import React from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Header, Footer } from '../Components';

const Details = () => {
  let { id } = useParams();
  const [vynil, setVynil] = React.useState({});
  // const navigate = useNavigate();

  React.useEffect(() => {
    // try {
    axios.get(`https://62c96901d9ead251e8bb4e90.mockapi.io/f/` + id).then((data) => {
      console.log(data.data);
      return setVynil(data.data);
    });
    // } catch (error) {
    // navigate(`/`);
    // }
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="details">
          <div>
            <img className="details__img" src={vynil.imageUrl} alt={vynil.title} />
          </div>
          <div className="details__inner">
            <h3 className="details__title">{vynil.title}</h3>
            <ul className="details__list">
              <li>Лейбл: {vynil.label}</li>
              <li>Страна: {vynil.country}</li>
              <li>Год записи: {vynil.relise}</li>
              <li>Год выпуска: {vynil.year}</li>
              <li>Стиль: {vynil.style}</li>
              <li>Состояние: {vynil.quality}</li>
              <li>Формат носителя: {vynil.format}</li>
            </ul>
            <div className="details__btn">
              <Link to="/">Купить за {vynil.price} ₽</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
