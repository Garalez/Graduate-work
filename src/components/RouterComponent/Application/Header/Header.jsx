import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Exit } from './img/Exit.svg';

export const Header = () => (
  <header>
    <div className={style.headerWrapper}>
      <div className={style.contentWrapper}>
        <Logo />
        <nav className={style.navigation}>
          <ul className={style.navList}>
            <li className={style.navItem}>Счета</li>
            <li className={style.navItem}>Обмен</li>
            <li className={style.navItem}>
              Выйти <Exit />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
);
