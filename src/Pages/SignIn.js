import React from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="login">
      <div className="container">
        <div className="leftHalf">
          <h1 className="login__title">Рады приветствовать вас снова!</h1>
          <h3 className="login__subtitle">Пожалуйста введите ваши данные</h3>
          <div className="login__content">
            <label>
              {/* Ваша почта */}
              <input type="text" placeholder="Почта" />
            </label>
            <label>
              {/* Ваш пароль */}
              <input type="password" placeholder="Пароль" />
            </label>
            <div>
              <button>Войти</button>
            </div>
            <div>
              Нет аккаунта? <Link to="/signup">Зарегистрироваться</Link>
            </div>
          </div>
        </div>
        <div className="rightHalf">
          <img
            src="https://cdn.dribbble.com/userupload/4052626/file/original-8520082b36c01efc368288ac5d1b15a2.png?compress=1&resize=1200x900"
            alt="login"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
