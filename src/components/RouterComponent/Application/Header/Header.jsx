import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import Navigation from './Navigation';

export const Header = () => {
  const token = localStorage.getItem('bearer');

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <a href='/'>
            <Logo className={style.logo} />
          </a>
          {!!token & (token !== 'undefined') ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
