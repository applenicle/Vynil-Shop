import React from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="leftHalf">
          <h1 className="login__title">Рады приветствовать вас!</h1>
          <h3 className="login__subtitle">Пожалуйста введите данные</h3>
          <div className="login__content">
            <label>
              {/* Ваша почта */}
              <input type="text" placeholder="Логин" />
            </label>
            <label>
              {/* Ваша почта */}
              <input type="text" placeholder="Почта" />
            </label>
            <label>
              {/* Ваш пароль */}
              <input type="password" placeholder="Пароль" />
            </label>
            <div>
              <button>Зарегистрироваться</button>
            </div>
            <div>
              Есть аккаунт? <Link to="/signin">Войти</Link>
            </div>
          </div>
        </div>
        <div className="rightHalf">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F13%2Fbe%2F95%2F13be955f0cbb3bdc14d90c7c655234b6--vinyl-records-beautiful-people.jpg&f=1&nofb=1&ipt=1c3c658ddb8afe85373e291486997b4d9cf6d01b756da9338e977ffe3a6202da&ipo=images"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
