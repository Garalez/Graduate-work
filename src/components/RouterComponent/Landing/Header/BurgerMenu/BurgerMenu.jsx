import style from './BurgerMenu.module.scss';
import { useState } from 'react';
import { ReactComponent as Logo } from '../img/logo.svg';
import { ReactComponent as Close } from './img/Close.svg';
import { ReactComponent as BurgerLogo } from './img/Menu.svg';

export const BurgerMenu = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <>
      {!isBurgerActive ? (
        <button
          className={style.burgerBtnOpen}
          onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
          <BurgerLogo />
        </button>
      ) : (
        <div className={style.burgerWrapper}>
          <div className={style.logoWrapper}>
            <Logo className={style.logo} />
            <p className={style.logoName}>C-Money</p>
          </div>
          <nav className={style.navigate}>
            <ul className={style.list}>
              <li className={style.item}>
                <a href='#profit'>Почему с нами выгодно?</a>
              </li>
              <li className={style.item}>
                <a href='#registration'>Регистрация</a>
              </li>
              <li className={style.item}>
                <a href='#reviews'>Отзывы</a>
              </li>
            </ul>
          </nav>
          <div className={style.underline} />
          <button
            className={style.burgerBtnClose}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
          >
            <Close />
          </button>
        </div>
      )}
    </>
  );
};
