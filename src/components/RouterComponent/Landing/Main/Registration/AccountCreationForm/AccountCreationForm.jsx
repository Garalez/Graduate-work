import style from '../Registration.module.scss';

export const AccountCreationForm = ({
  AccountCreationFormSubmit,
  formValues,
  handleChange,
}) => {
  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => AccountCreationFormSubmit(e)}
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
      <button className={style.nextBtn}>Зарегистрироваться</button>
    </form>
  );
};
