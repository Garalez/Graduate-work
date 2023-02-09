// import { useNavigate } from 'react-router-dom';
import useWindowDimensions from '../../../../hooks/screenViewPort';
import BurgerMenu from './BurgerMenu';
import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import Menu from './Menu';

export const Header = () => {
  const { width } = useWindowDimensions();
  // const navigate = useNavigate();

  return (
    <header>
      <div className={style.header}>
        <div className={style.headerWrapper}>
          <a
            href='/application'
            className={style.logoWrapper}
          >
            <Logo className={style.logo} />
          </a>
          {width <= 768 ? <BurgerMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
