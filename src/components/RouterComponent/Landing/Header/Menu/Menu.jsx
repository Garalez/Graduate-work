import style from './Menu.module.scss';

export const Menu = () => (
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
);
