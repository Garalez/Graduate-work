/* eslint-disable max-len */
import style from './PlatformContacts.module.scss';
import { ReactComponent as TelegramLogoSvg } from '../../../../../assets/svg/telegramSocial.svg';
import { ReactComponent as TwitterLogoSvg } from '../../../../../assets/svg/twitterSocial.svg';

export const PlatformContacts = () => (
  <div className={style.contactsWrapper}>
    <ul className={style.contactsList}>
      <li className={style.contactsItem}>Контакты:</li>
      <li className={style.contactsItem}>+7 921 347-49-97</li>
      <li className={style.contactsItem}>C-Money@gmail.com</li>
      <li className={style.contactsItem}>
        г. Москва
        <span className={style.contactsStreet}>ул. Новослободская</span> 120/2
        54
      </li>
    </ul>
    <ul className={style.contactsSocialList}>
      <li className={style.contactsSocialItem}>
        <a
          className={style.contactsSocial}
          href='https://desktop.telegram.org/'
        >
          <TelegramLogoSvg className={style.contactsSocial} />
        </a>
      </li>
      <li className={style.contactsSocialItem}>
        <a href='https://twitter.com/?lang=ru'>
          <TwitterLogoSvg className={style.contactsSocial} />
        </a>
      </li>
    </ul>
  </div>
);
