import style from './PlatformCopyrights.module.scss';
import { ReactComponent as PlatformLogo } from './img/PlatformLogo.svg';

export const PlatformCopyrights = () => (
  <div className={style.copyrightsLogoWrapper}>
    <a href='/application'>
      <PlatformLogo />
    </a>
  </div>
);
