import style from './Menu.module.scss';

export const Menu = () => {
  console.log(style);
  return (
    <nav className={style.navigate}>
      <ul className={style.list}>
        <li className={style.item}>Почему с нами выгодно?</li>
        <li className={style.item}>Регистрация</li>
        <li className={style.item}>Отзывы</li>
      </ul>
    </nav>
  );
};
