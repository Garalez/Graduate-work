import style from '../Registration.module.scss';
import { PropTypes } from 'prop-types';

export const ContactsForm = ({
  contactsFormSubmit,
  formValues,
  handleChange,
}) => (
  <form
    className={style.registrationForm}
    action=''
    onSubmit={(e) => contactsFormSubmit(e)}
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

ContactsForm.propTypes = {
  contactsFormSubmit: PropTypes.func,
  formValues: PropTypes.obj,
  handleChange: PropTypes.func,
};
