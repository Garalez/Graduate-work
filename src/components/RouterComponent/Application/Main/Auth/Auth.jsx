/* eslint-disable max-len */
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { userRequestAsync } from '../../../../../store/accountRequest/accountRequest';
import style from './Auth.module.scss';

export const Auth = () => {
  // const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    login: '',
    password: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState({
    login: false,
    password: false,
  });

  const inputValidation = () => {
    console.log(userData);
    console.log(displayErrorMassage);
    setDisplayErrorMassage({
      login: !!(userData.login && userData.login.length <= 6),
      password: !!(userData.password && userData.password.length <= 6),
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const regex = /[^a-zA-Z]/;
    setUserData({ ...userData, [name]: value.replace(regex, '') });
    if (userData.login.length >= 6) {
      setDisplayErrorMassage({ ...displayErrorMassage, login: false });
    }
    if (userData.password.length >= 6) {
      setDisplayErrorMassage({ ...displayErrorMassage, password: false });
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userData.login.length >= 6 && userData.password.length >= 6) {
      console.log('ggnoobs');
      // dispatch(userRequestAsync(userData.login, userData.password));
    }
  };

  return (
    <section>
      <div className={style.authOverlay}>
        <div className={style.authWrapper}>
          <h1 className={style.authTitle}>Вход в аккаунт</h1>
          <form action='' onSubmit={(e) => handleFormSubmit(e)}>
            <ul className={style.authInputList}>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='login'>
                  Логин
                </label>
                <input
                  className={style.authInput}
                  type='text'
                  id='login'
                  name='login'
                  onChange={(e) => handleChange(e)}
                  value={userData.login}
                  onBlur={() => inputValidation()}
                  required
                />
                {displayErrorMassage.login && (
                  <p className={style.authInputError}>
                    Логин должен содерать от 6 символов
                  </p>
                )}
              </li>
              <li className={style.authInputItem}>
                <label className={style.authLabel} htmlFor='password'>
                  Пароль
                </label>
                <input
                  className={style.authInput}
                  type='text'
                  id='password'
                  name='password'
                  onChange={(e) => handleChange(e)}
                  value={userData.password}
                  onBlur={() => inputValidation()}
                  required
                />
                {displayErrorMassage.password && (
                  <p className={style.authInputError}>
                    Пароль должен содерать от 6 символов
                  </p>
                )}
              </li>
            </ul>
            <div className={style.authBtnWrapper}>
              <button className={style.authFormSubmit} type='submit'>
                Перевести
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
