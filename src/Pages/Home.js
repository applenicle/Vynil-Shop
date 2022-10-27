import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <section>
        <div className="about__inner">
          <div>
            <h3 className="about__title">Lorem, ipsum dolor.</h3>
            <p className="about__text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus id modi officia
              fugiat voluptatum dicta a numquam vitae doloremque minima.
            </p>
            <div className="">
              <Link to="/" className="about__btn">
                Try for free
              </Link>
              <Link to="/" className="about__btn">
                Take a tour
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about">
        <div className="container">
          <div className="about__inner">
            <div>
              <h3 className="about__title">Далеко-далеко.</h3>
              <p className="about__text">
                Далеко-далеко за словесными горами, в стране гласных и согласных живут.
              </p>
              <button className="about__btn">Перейти в каталог</button>
            </div>
            <img
              className="about__img"
              src="https://basis-tp.ru/wp-content/uploads/3/2/8/3280c55bb3c35dd8aca58d3af345f4e4.jpeg"
              alt="Виниловая пластинка"
            />
          </div>
        </div>
      </section> */}
      <div>
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
      </div>
      <Footer />
    </div>
  );
};

export default Home;
