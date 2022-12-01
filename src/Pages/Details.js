import React from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Footer, Header } from '../Components';

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
          <div className="details__img">
            <img src={vynil.imageUrl} alt={vynil.title} />
          </div>
          <div className="details__inner">
            <Link to="/">
              <svg
                className="details__arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#D3D3D3">
                <polygon points="7.293 4.707 14.586 12 7.293 19.293 8.707 20.707 17.414 12 8.707 3.293 7.293 4.707" />
              </svg>
              Обратно в магазин
            </Link>
            <h3 className="details__title">{vynil.title}</h3>
            <p className="details__description">{vynil.description}</p>
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
              <div>{vynil.price} ₽</div>
              <Link to="/">Купить пластинку</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Details;
