import style from './FundsTransfer.module.scss';

export const FundsTransfer = () => (
  <section className={style.transfer}>
    <h2 className={style.transferTitle}>Перевод</h2>
    <form className={style.transferForm} action='#'>
      <ul className={style.transferList}>
        <li className={style.transferItem}>
          <label className={style.transferLabel} htmlFor='account'>
            Счет
          </label>
          <input
            className={style.transferInput}
            type='text'
            id='account'
            name='account'
          />
        </li>
        <li className={style.transferItem}>
          <label className={style.transferLabel} htmlFor='sum'>
            Сумма
          </label>
          <input
            className={style.transferInput}
            type='text'
            id='sum'
            name='sum'
          />
        </li>
        <li className={style.transferItem}>
          <button className={style.transferFormSubmit} type='submit'>
            Перевести
          </button>
        </li>
      </ul>
    </form>
  </section>
);
