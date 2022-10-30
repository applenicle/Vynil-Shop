import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Footer } from '../Components';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="about">
        <div className="about__inner">
          <div>
            <h3 className="about__title">Everyday Things are Colorful</h3>
            <p className="about__text">
              Once you realize you should enjoy the small things, life changes to being boring to
              extremly colorful.
            </p>
            <div>
              <Link to="/catalog" className="about__btn">
                Каталог
              </Link>
              <Link to="/contacts" className="about__btn-active">
                Контакты
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div>
          <h3>Акции</h3>
        </div>
        <div className="grid__item">
          <div className="block">
            <div className="block-relative">
              <img
                src="https://vinyl.ru/upload/resizeImg/detail/00-00057629/main_site_photo.jpg"
                alt=""
              />
            </div>
            <div className="block-text">
              <div className="block-text-spec">
                <h4>Специальные цены на товары для красоты и здоровья</h4>
              </div>
              <div className="timer">
                <time>До 23 окт</time>
                <div>Спецпредложение</div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
};

export default Home;
