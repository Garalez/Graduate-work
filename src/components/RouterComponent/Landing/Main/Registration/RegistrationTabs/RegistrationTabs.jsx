import style from '../Registration.module.scss';
import { ReactComponent as ActiveTab1 } from '../img/activeTab1.svg';
import { ReactComponent as ActiveTab2 } from '../img/activeTab2.svg';
import { ReactComponent as ActiveTab3 } from '../img/activeTab3.svg';
import { ReactComponent as InactiveTab1 } from '../img/inactiveTab1.svg';
import { ReactComponent as InactiveTab2 } from '../img/inactiveTab2.svg';
import { ReactComponent as InactiveTab3 } from '../img/inactiveTab3.svg';

export const RegistrationTabs = ({ switchActiveTab, activeTab, isTabValid }) => {
  return (
    <ul className={style.registrationTabsList}>
      <li className={style.registrationTabsItem}>
        <button
          className={style.registrationTabsBtn}
          onClick={() => switchActiveTab('firstTab')}
        >
          {activeTab.firstTab ? <ActiveTab1 /> : <InactiveTab1 />}
        </button>
      </li>
      <li className={style.registrationTabsItem}>
        <button
          className={style.registrationTabsBtn}
          onClick={() => {
            if (isTabValid.firstTabValid) {
              switchActiveTab('secondTab');
            }
          }}
        >
          {activeTab.secondTab ? <ActiveTab2 /> : <InactiveTab2 />}
        </button>
      </li>
      <li className={style.registrationTabsItem}>
        <button
          className={style.registrationTabsBtn}
          onClick={() => {
            if (isTabValid.secondTabIsValid) {
              switchActiveTab('thirdTab');
            }
          }}
        >
          {activeTab.thirdTab ? <ActiveTab3 /> : <InactiveTab3 />}
        </button>
      </li>
    </ul>
  );
};
