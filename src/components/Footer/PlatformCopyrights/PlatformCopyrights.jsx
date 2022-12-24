import style from './PlatformCopyrights.module.scss';
import {ReactComponent as PlatformLogo} from './img/PlatformLogo.svg';

export const PlatformCopyrights = () => {
  console.log(style);
  return (
    <div className={style.copyrightsWrapper}>
      <div className={style.copyrightsLogoWrapper}>
        <PlatformLogo />
        <p className={style.copyrightsPlatformName}>C-Money</p>
      </div>
      <p className={style.copyrights}>© C-Money, 2022</p>
    </div>
  );
};
