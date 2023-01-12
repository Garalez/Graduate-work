import style from './Registration.module.scss';
import { ReactComponent as ActiveTab1 } from './img/activeTab1.svg';
import { ReactComponent as ActiveTab2 } from './img/activeTab2.svg';
import { ReactComponent as ActiveTab3 } from './img/activeTab3.svg';
import { useState } from 'react';
import { ReactComponent as InactiveTab1 } from './img/inactiveTab1.svg';
import { ReactComponent as InactiveTab2 } from './img/inactiveTab2.svg';
import { ReactComponent as InactiveTab3 } from './img/inactiveTab3.svg';
import FullNameForm from './FullNameForm';
import ContactsForm from './ContactsForm';
import AccountCreationForm from './AccountCreationForm';
import RegistrationSuccess from './RegistrationSuccess';

export const Registration = () => {
  const [activeTab, setActiveTab] = useState({
    firstTab: true,
    secondTab: false,
    thirdTab: false,
  });

  const [isTabValid, setIsTabValid] = useState({
    firstTabValid: false,
    secondTabIsValid: false,
    thirdTabIsValid: false,
  });

  const [formValues, setFormValues] = useState({
    name: '',
    surname: '',
    patronymic: '',
    phoneNumber: '',
    eMail: '',
    login: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const FullNameFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.name && formValues.surname && formValues.patronymic) {
      setIsTabValid({ ...isTabValid, firstTabValid: true });
      setActiveTab(() => ({
        firstTab: false,
        secondTab: true,
        thirdTab: false,
      }));
    }
  };

  const ContactsFormSubmit = (e) => {
    e.preventDefault();
    const phoneRegex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (
      phoneRegex.test(formValues.phoneNumber) &&
      emailRegex.test(formValues.eMail)
    ) {
      setIsTabValid({ ...isTabValid, secondTabIsValid: true });
      setActiveTab(() => ({
        firstTab: false,
        secondTab: false,
        thirdTab: true,
      }));
    }
  };

  const AccountCreationFormSubmit = (e) => {
    e.preventDefault();
    if (formValues.password && formValues.confirmPassword && formValues.login) {
      setIsTabValid({ ...isTabValid, thirdTabIsValid: true });
      console.log('gg');
    }
  };

  return (
    <section className={style.registrationSection} id='registration'>
      <div className={style.registrationWrapper}>
        <h2 className={style.registrationTitle}>
          Как зарегистрироваться на платформе
        </h2>
        {isTabValid.firstTabValid &
        isTabValid.secondTabIsValid &
        isTabValid.thirdTabIsValid ? (
          <RegistrationSuccess />
        ) : (
          <>
            <p className={style.registrationText}>
              Пошагово заполните все поля формы
            </p>
            <div className={style.registrationFormUnderlay}>
              <div className={style.registarionFormWrapper}>
                <ul className={style.registrationTabsList}>
                  <li className={style.registrationTabsItem}>
                    <button
                      className={style.registrationTabsBtn}
                      onClick={() =>
                        setActiveTab(() => ({
                          firstTab: true,
                          secondTab: false,
                          thirdTab: false,
                        }))
                      }
                    >
                      {activeTab.firstTab ? <ActiveTab1 /> : <InactiveTab1 />}
                    </button>
                  </li>
                  <li className={style.registrationTabsItem}>
                    <button
                      className={style.registrationTabsBtn}
                      onClick={() => {
                        if (isTabValid.firstTabValid) {
                          setActiveTab(() => ({
                            firstTab: false,
                            secondTab: true,
                            thirdTab: false,
                          }));
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
                          setActiveTab(() => ({
                            firstTab: false,
                            secondTab: false,
                            thirdTab: true,
                          }));
                        }
                      }}
                    >
                      {activeTab.thirdTab ? <ActiveTab3 /> : <InactiveTab3 />}
                    </button>
                  </li>
                </ul>
                {activeTab.firstTab && (
                  <FullNameForm
                    FullNameFormSubmit={FullNameFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.secondTab && (
                  <ContactsForm
                    ContactsFormSubmit={ContactsFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
                {activeTab.thirdTab && (
                  <AccountCreationForm
                    AccountCreationFormSubmit={AccountCreationFormSubmit}
                    formValues={formValues}
                    handleChange={handleChange}
                  />
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};
