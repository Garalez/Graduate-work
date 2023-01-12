import style from '../Registration.module.scss';

export const ContactsForm = ({
  ContactsFormSubmit,
  formValues,
  handleChange,
}) => {
  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => ContactsFormSubmit(e)}
    >
      <ul className={style.registrationInputList}>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='phone'>
            Телефон
          </label>
          <input
            className={style.registrationInput}
            type='number'
            id='phone'
            name='phoneNumber'
            value={formValues.phoneNumber}
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li className={style.registrationInputItem}>
          <label className={style.registrationLabel} htmlFor='eMail'>
            Электронная почта
          </label>
          <input
            className={style.registrationInput}
            type='text'
            id='eMail'
            name='eMail'
            value={formValues.eMail}
            onChange={(e) => handleChange(e)}
          />
        </li>
        <li className={style.registrationInputItem}>
          <button className={style.nextBtn}>Далее</button>
        </li>
      </ul>
    </form>
  );
};
