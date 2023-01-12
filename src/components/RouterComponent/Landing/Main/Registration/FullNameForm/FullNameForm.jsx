import style from '../Registration.module.scss';

export const FullNameForm = ({
  FullNameFormSubmit,
  formValues,
  handleChange,
}) => {
  return (
    <form
      className={style.registrationForm}
      action=''
      onSubmit={(e) => FullNameFormSubmit(e)}
    >
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
            value={formValues.name}
            onChange={(e) => handleChange(e)}
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
            value={formValues.surname}
            onChange={(e) => handleChange(e)}
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
            value={formValues.patronymic}
            onChange={(e) => handleChange(e)}
          />
        </li>
      </ul>
      <button className={style.nextBtn}>Далее</button>
    </form>
  );
};
