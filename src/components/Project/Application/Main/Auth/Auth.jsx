import style from './Auth.module.scss';

export const Auth = () => {
  console.log(style);
  return (
    <section>
      <div className={style.authWrapper}>
        <h1 className={style.authTitle}>Вход в аккаунт</h1>
        <form action='#'>
          <ul>
            <li className={style.authInputItem}>
              <label className={style.authLabel} htmlFor='login'>
                Логин
              </label>
              <input
                className={style.authInput}
                type='text'
                id='login'
                name='login'
              />
            </li>
            <li className={style.authInputItem}>
              <label className={style.authLabel} htmlFor='password'>
                Пароль
              </label>
              <input
                className={style.authInput}
                type='text'
                id='password'
                name='password'
              />
            </li>
          </ul>
          <button className={style.authFormSubmit} type='submit'>
            Перевести
          </button>
        </form>
      </div>
    </section>
  );
};
