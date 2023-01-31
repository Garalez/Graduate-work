import { useState } from 'react';
import style from './FundsTransfer.module.scss';

export const FundsTransfer = () => {
  const [transactionData, setTransactionData] = useState({
    account: '',
    sum: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState({
    account: false,
    sum: false,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    const regex = /\D/;
    setTransactionData({
      ...transactionData,
      [name]: value.replace(regex, ''),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (transactionData.account && transactionData.sum) {
      console.log('gg noobs');
    }
  };

  return (
    <section className={style.transfer}>
      <h2 className={style.transferTitle}>Перевод</h2>
      <form
        className={style.transferForm}
        action=''
        onSubmit={(e) => handleSubmit(e)}
      >
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
              onChange={(e) => handleChange(e)}
              value={transactionData.account}
            />
            {displayErrorMassage.account && (
              <p className={style.authInputError}>
                Логин должен содерать от 6 символов
              </p>
            )}
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
              onChange={(e) => handleChange(e)}
              value={transactionData.sum}
            />
            {displayErrorMassage.sum && (
              <p className={style.authInputError}>
                Логин должен содерать от 6 символов
              </p>
            )}
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
};
