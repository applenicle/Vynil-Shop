import React from 'react';
import styles from './Map.module.scss';

const Map = () => {
  return (
    <div className="container">
      <h3>Наш магазин</h3>
      <div className={styles.InfoContent}>
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
      <h3>Как к нам добраться?</h3>
      <iframe
        className={styles.Map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2183.388304462067!2d60.60087931643765!3d56.82212711647851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43c16ee95689e029%3A0x4f92acd3d371303b!2z0YPQuy4g0JTQtdC60LDQsdGA0LjRgdGC0L7QsiwgODMsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQstC10YDQtNC70L7QstGB0LrQsNGPINC-0LHQuy4sIDYyMDE0NA!5e0!3m2!1sru!2sru!4v1666853995534!5m2!1sru!2sru"
        width="100%"
        height="700"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
