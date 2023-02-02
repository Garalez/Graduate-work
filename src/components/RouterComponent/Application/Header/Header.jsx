import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import { ReactComponent as Exit } from './img/Exit.svg';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('bearer');

  const handleLeaveAccount = () => {
    localStorage.removeItem('bearer');
    location.reload();
  };

  return (
    <header>
      <div className={style.headerWrapper}>
        <div className={style.contentWrapper}>
          <Logo />
          {!!token & token !== 'undefined' ? (
            <nav className={style.navigation}>
              <ul className={style.navList}>
                <li className={style.navItem}>
                  <button
                    className={style.navItemButton}
                    onClick={() => navigate('/a/c')}
                  >
                    Счета
                  </button>
                </li>
                <li className={style.navItem}>
                  <button
                    className={style.navItemButton}
                    onClick={() => navigate('/a/e')}
                  >
                    Обмен
                  </button>
                </li>
                <li className={style.navItem}>
                  <button
                    className={style.navItemButton}
                    onClick={() => handleLeaveAccount()}
                  >
                    Выйти <Exit className={style.navItemExitImg} />
                  </button>
                </li>
              </ul>
            </nav>
          ) : <></>}
        </div>
      </div>
    </header>
  );
};
