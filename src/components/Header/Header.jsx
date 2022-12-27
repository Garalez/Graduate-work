import useWindowDimensions from '../../hooks/screenViewPort';
import BurgerMenu from './BurgerMenu';
import style from './Header.module.scss';
import { ReactComponent as Logo } from './img/logo.svg';
import Menu from './Menu';

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header>
      <div className={style.header}>
        <div className={style.headerWrapper}>
          <div className={style.logoWrapper}>
            <Logo className={style.logo} />
            <p className={style.logoName}>C-Money</p>
          </div>
          {width <= 768 ? <BurgerMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
