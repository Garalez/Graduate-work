import style from './Footer.module.scss';
import { ReactComponent as Logo } from '../../Landing/Header/img/logo.svg';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <div className={style.logoWrapper}>
          <Logo className={style.logo} />
          <p className={style.logoName}>C-Money</p>
        </div>
        <p className={style.footerCopyrights}>© C-Money, 2022</p>
      </div>
    </footer>
  );
};
