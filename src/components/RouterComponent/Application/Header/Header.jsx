import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import { useNavigate } from 'react-router-dom';
import Navigation from './Navigation';

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <button className={style.headerLogoBtn} onClick={() => navigate('/')}>
            <Logo />
          </button>
          {!!token & (token !== 'undefined') ? <Navigation /> : <></>}
        </div>
      </div>
    </header>
  );
};
