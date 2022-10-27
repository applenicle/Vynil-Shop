import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not__found">
      <div className="container">
        <h3>Ууупс...</h3>
        <p>
          Что-то пошло не так
          <br />
          Попробуй вернуться на <Link to="/">главную</Link> или свяжись с администрацией сайта.
        </p>
        <div>Ошибка 404 страница не найдена</div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fscrd.gov.co%2Fsites%2Fdefault%2Ffiles%2Finline-images%2Ferror-404.png&f=1&nofb=1&ipt=77c0f48578ca29f1e24f2118a3f9468a4aad1fb00a3b3aacea230118b8e23028&ipo=images"
          alt="404"
        />
      </div>
    </div>
  );
};

export default NotFound;
