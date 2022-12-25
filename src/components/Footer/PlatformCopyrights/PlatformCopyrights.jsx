import style from './PlatformCopyrights.module.scss';
import { ReactComponent as PlatformLogo } from './img/PlatformLogo.svg';

export const PlatformCopyrights = () => {
  return (
    <div className={style.copyrightsLogoWrapper}>
      <PlatformLogo className={style.copyrightsLogo} />
      <p className={style.copyrightsPlatformName}>C-Money</p>
    </div>
  );
};
