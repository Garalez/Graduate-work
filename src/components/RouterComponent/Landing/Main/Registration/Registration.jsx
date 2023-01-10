import style from './Registration.module.scss';
import { ReactComponent as ActiveTab1 } from './img/activeTab1.svg';
import { ReactComponent as ActiveTab2 } from './img/activeTab2.svg';
import { ReactComponent as ActiveTab3 } from './img/activeTab3.svg';
// import {ReactComponent as InactiveTab1} from './img/inactiveTab1.svg';
// import {ReactComponent as InactiveTab2} from './img/inactiveTab2.svg';
// import {ReactComponent as InactiveTab3} from './img/inactiveTab3.svg';

export const Registration = () => {
  return (
    <section className={style.registrationSection} id='registration'>
      <div className={style.registrationWrapper}>
        <h2 className={style.registrationTitle}>
          Как зарегистрироваться на платформе
        </h2>
        <p className={style.registrationText}>
          Пошагово заполните все поля формы
        </p>
        <form className={style.registrationForm} action='#'>
          <ul className={style.registrationTabsList}>
            <li className={style.registrationTabsItem}>
              <button className={style.registrationTabsBtn}>
                <ActiveTab1 />
              </button>
            </li>
            <li className={style.registrationTabsItem}>
              <button className={style.registrationTabsBtn}>
                <ActiveTab2 />
              </button>
            </li>
            <li className={style.registrationTabsItem}>
              <button className={style.registrationTabsBtn}>
                <ActiveTab3 />
              </button>
            </li>
          </ul>
          <ul className={style.registrationInputList}>
            <li className={style.registrationInputItem}>
              <label className={style.registrationLabel} htmlFor='name'>
                Имя
              </label>
              <input
                className={style.registrationInput}
                type='text'
                id='name'
                name='name'
              />
            </li>
            <li className={style.registrationInputItem}>
              <label className={style.registrationLabel} htmlFor='surname'>
                Фамилия
              </label>
              <input
                className={style.registrationInput}
                type='text'
                id='surname'
                name='surname'
              />
            </li>
            <li className={style.registrationInputItem}>
              <label className={style.registrationLabel} htmlFor='patronymic'>
                Отчество
              </label>
              <input
                className={style.registrationInput}
                type='text'
                id='patronymic'
                name='patronymic'
              />
            </li>
          </ul>
          <button className={style.nextBtn}>Далее</button>
        </form>
      </div>
    </section>
  );
};
