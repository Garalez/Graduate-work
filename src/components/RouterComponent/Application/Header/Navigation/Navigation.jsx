import { useNavigate } from 'react-router-dom';
import { ReactComponent as Exit } from '../img/Exit.svg';
import style from './Navigation.module.scss';

export const Navigation = () => {
  const navigate = useNavigate();

  const handleLeaveAccount = () => {
    localStorage.removeItem('bearer');
    location.reload();
  };

  return (
    <nav className={style.navigation}>
      <ul className={style.navList}>
        <li className={style.navItem}>
          <button
            className={style.navItemButton}
            onClick={() => navigate('/application/accounts')}
          >
            Счета
          </button>
        </li>
        <li className={style.navItem}>
          <button
            className={style.navItemButton}
            onClick={() => navigate('/application/exchange')}
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
  );
};
