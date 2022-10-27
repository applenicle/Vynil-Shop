import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Map from '../Components/Map';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="info">
        <div className="container">
          <h3 className="info__title">Наш магазин</h3>
          <div className="info__content">
            <p>
              <span>Адрес</span>: Декабристов 83, город Екатеринбург
            </p>
            <p>
              <span>Телефон</span>: Тут телефон легенды
            </p>
            <p>
              <span>Email:</span>: legenda@gmail.emk
            </p>
            <p>
              <span>Режим работы:</span>: ежедневно с 10.00 до 22.00
            </p>
          </div>
        </div>
      </section>
      <Map />
      <Footer />
    </div>
  );
};

export default Contact;
