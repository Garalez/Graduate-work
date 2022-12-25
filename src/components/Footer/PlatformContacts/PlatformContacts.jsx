import style from './PlatformContacts.module.scss';
import { ReactComponent as TelegramLogo } from './img/TelegramSocial.svg';
import { ReactComponent as TwitterLogo } from './img/TwitterSocial.svg';

export const PlatformContacts = () => {
  return (
    <div className={style.contactsWrapper}>
      <ul className={style.contactsList}>
        <li className={style.contactsItem}>Контакты:</li>
        <li className={style.contactsItem}>+7 921 347-49-97</li>
        <li className={style.contactsItem}>C-Money@gmail.com</li>
        <li className={style.contactsItem}>
          г. Москва <span className={style.contactsStreet}>ул. Новослободская</span> 120/2 54
        </li>
      </ul>
      <ul className={style.contactsSocialList}>
        <li className={style.contactsSocialItem}>
          <a href='https://desktop.telegram.org/'>
            <TelegramLogo />
          </a>
        </li>
        <li className={style.contactsSocialItem}>
          <a href='https://twitter.com/?lang=ru'>
            <TwitterLogo />
          </a>
        </li>
      </ul>
    </div>
  );
};
