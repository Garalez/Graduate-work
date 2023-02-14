/* eslint-disable max-len */
import style from './Header.module.scss';
import { ReactComponent as LogoSvg } from '../../../../assets/svg/violetLogo.svg';
import useWindowDimensions from '../../../../hooks/screenViewPort';
import BurgerMenu from './BurgerMenu';
import Menu from './Menu';

export const Header = () => {
  const { width } = useWindowDimensions();

  return (
    <header>
      <div className={style.header}>
        <div className={style.headerWrapper}>
          <a
            href='/application'
            className={style.logoWrapper}
          >
            <LogoSvg className={style.logo} />
          </a>
          {width <= 768 ? <BurgerMenu /> : <Menu />}
        </div>
      </div>
    </header>
  );
};
