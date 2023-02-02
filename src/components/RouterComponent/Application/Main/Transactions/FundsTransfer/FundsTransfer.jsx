/* eslint-disable max-len */
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { accountTransferFundsRequestAsync } from '../../../../../../store/accountTransferFunds/accountTransferFundsActions';
import style from './FundsTransfer.module.scss';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { userAccountInfoRequestAsync } from '../../../../../../store/accountInfoRequest/accountInfoRequestActions';

export const FundsTransfer = ({ accountInfo }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');

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

    setDisplayErrorMassage({
      ...displayErrorMassage,
      [name]: !value,
    });
  };

  const transferSubmit = (e) => {
    e.preventDefault();

    setDisplayErrorMassage({
      account: !transactionData.account,
      sum: !transactionData.sum,
    });

    if (
      transactionData.account &&
      transactionData.sum &&
      +transactionData.sum <= +accountInfo.balance
    ) {
      const accountNumberFrom = accountInfo.account;
      const accountNumberTo = transactionData.account;
      const transferAmount = transactionData.sum;

      dispatch(
        accountTransferFundsRequestAsync({
          from: accountNumberFrom,
          to: accountNumberTo,
          amount: transferAmount,
        })
      );

      setTransactionData({
        account: '',
        sum: '',
      });

      dispatch(userAccountInfoRequestAsync(accountId));
    }
  };

  return (
    <section className={style.transfer}>
      <h2 className={style.transferTitle}>Перевод</h2>
      <form
        className={style.transferForm}
        action=''
        onSubmit={(e) => transferSubmit(e)}
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
              <p className={style.authInputError}>Неверный номер счёта</p>
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
              <p className={style.authInputError}>Неверная сумма перевода</p>
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

FundsTransfer.propTypes = {
  accountInfo: PropTypes.object,
};
