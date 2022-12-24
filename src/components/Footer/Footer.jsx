import style from './Footer.module.scss';
import PlatformContacts from './PlatformContacts';
import PlatformLinks from './PlatformLinks';
import PlatformCopyrights from './PlatformCopyrights';
import PlatformOnMap from './PlatformOnMap';

export const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerWrapper}>
        <PlatformCopyrights />
        <PlatformLinks />
        <PlatformContacts />
        <PlatformOnMap />
      </div>
    </footer>
  );
};
