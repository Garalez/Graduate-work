import style from './PlatformLinks.module.scss';

export const PlatformLinks = () => {
  return (
    <ul className={style.linksList}>
      <li className={style.linksItem}>
        <a className={style.linksHref} href='#platformInfo'>О компании</a>
      </li>
      <li className={style.linksItem}>
        <a className={style.linksHref} href='#reviews'>Отзывы</a>
      </li>
      <li className={style.linksItem}>
        <a className={style.linksHref} href='#registration'>Регистрация</a>
      </li>
      <li className={style.linksItem}>
        <a className={style.linksHref} href='#profit'>Почему с нами выгодно?</a>
      </li>
    </ul>
  );
};
