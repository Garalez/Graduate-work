/* eslint-disable max-len */
import style from './PlatformCopyrights.module.scss';
import { ReactComponent as PlatformLogoSvg } from '../../../../../assets/svg/whiteLogo.svg';

export const PlatformCopyrights = () => (
  <div className={style.copyrightsLogoWrapper}>
    <a href='/application'>
      <PlatformLogoSvg />
    </a>
  </div>
);
