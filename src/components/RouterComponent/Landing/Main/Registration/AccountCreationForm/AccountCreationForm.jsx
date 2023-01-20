import style from '../Registration.module.scss';
import { PropTypes } from 'prop-types';

export const AccountCreationForm = ({
  accountCreationFormSubmit,
  formValues,
  handleChange,
}) => (
  <form
    className={style.registrationForm}
    action=''
    onSubmit={(e) => accountCreationFormSubmit(e)}
  >
    <ul className={style.registrationInputList}>
      <li className={style.registrationInputItem}>
        <label className={style.registrationLabel} htmlFor='login'>
          Придумайте логин
        </label>
        <input
          className={style.registrationInput}
          type='text'
          id='login'
          name='login'
          value={formValues.login}
          onChange={(e) => handleChange(e)}
        />
      </li>
      <li className={style.registrationInputItem}>
        <label className={style.registrationLabel} htmlFor='password'>
          Придумайте пароль
        </label>
        <input
          className={style.registrationInput}
          type='password'
          id='password'
          name='password'
          value={formValues.password}
          onChange={(e) => handleChange(e)}
        />
      </li>
      <li className={style.registrationInputItem}>
        <label className={style.registrationLabel} htmlFor='confirmPassword'>
          Повторите пароль
        </label>
        <input
          className={style.registrationInput}
          type='password'
          id='confirmPassword'
          name='confirmPassword'
          value={formValues.confirmPassword}
          onChange={(e) => handleChange(e)}
        />
      </li>
    </ul>
    <div className={style.registrationAgreementWrapper}>
      <button className={style.nextBtn}>Зарегистрироваться</button>
      <div className={style.registrationPolicyWrapper}>
        <div className={style.customCheckboxWrapper}>
          <input
            className={style.customCheckboxInput}
            type='checkbox'
            id='customCheckbox'
          />
          <label
            className={style.customCheckboxLabel}
            htmlFor='customCheckbox'
          />
        </div>
        <p className={style.policyAgreementText}>
          By clicking on the button, I consent to the processing of personal
          data and agree to the privacy policy
        </p>
      </div>
    </div>
  </form>
);

AccountCreationForm.propTypes = {
  accountCreationFormSubmit: PropTypes.func,
  formValues: PropTypes.obj,
  handleChange: PropTypes.func,
};
