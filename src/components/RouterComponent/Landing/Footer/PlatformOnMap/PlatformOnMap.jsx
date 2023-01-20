import style from './PlatformOnMap.module.scss';

export const PlatformOnMap = () => (
  <div className={style.mapWrapper}>
    <iframe
      className={style.map}
      title='googleMap'
      src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2243.1380472373207!2d37.58771351625282!3d55.79084078056356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b549f7f924eb79%3A0x8eed2af7f06bffa2!2z0J3QvtCy0L7RgdC70L7QsdC-0LTRgdC60LDRjyDRg9C7LiwgMTIwLCDQnNC-0YHQutCy0LAsINCg0L7RgdGB0LjRjywgMTI3MDU1!5e0!3m2!1sru!2sua!4v1671887856249!5m2!1sru!2sua'
      width='420'
      height='200'
      allowFullScreen=''
      loading='lazy'
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  </div>
);
