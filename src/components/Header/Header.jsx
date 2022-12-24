import style from './Header.module.scss';
import {ReactComponent as Logo} from './img/logo.svg';
import Menu from './Menu';

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerWrapper}>
        <div className={style.logoWrapper}>
          <Logo className={style.logo} />
          <p className={style.logoName}>C-Money</p>
        </div>
        <Menu />
      </div>
    </header>
  );
};
