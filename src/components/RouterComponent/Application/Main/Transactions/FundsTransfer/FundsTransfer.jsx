/* eslint-disable max-len */
import style from './FundsTransfer.module.scss';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { accountTransferFundsRequestAsync } from '../../../../../../store/accountTransferFunds/accountTransferFundsActions';
import { userAccountInfoRequestAsync } from '../../../../../../store/accountInfoRequest/accountInfoRequestActions';

export const FundsTransfer = ({ accountInfo }) => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');
  const transferResponse = useSelector((state) => state.accountTransferFunds);

  const [transactionData, setTransactionData] = useState({
    account: '',
    sum: '',
  });

  const [displayErrorMassage, setDisplayErrorMassage] = useState({
    account: false,
    sum: false,
  });

  useEffect(() => {
    if (transferResponse.status === 'loaded') {
      setTransactionData({
        account: '',
        sum: '',
      });

      dispatch(userAccountInfoRequestAsync(accountId));
    }
  }, [transferResponse]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    const regexNonDigits = /\D/;

    setTransactionData({
      ...transactionData,
      [name]: value.replace(regexNonDigits, ''),
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
    }
  };

  return (
    <section className={style.transfer}>
      <h2 className={style.transferTitle}>??????????????</h2>
      <form
        className={style.transferForm}
        action=''
        onSubmit={(e) => transferSubmit(e)}
      >
        <ul className={style.transferList}>
          <li className={style.transferItem}>
            <label className={style.transferLabel} htmlFor='account'>
              ????????
            </label>
            <input
              className={style.transferInput}
              type='text'
              id='account'
              name='account'
              onChange={(e) => handleChange(e)}
              value={transactionData.account}
            />
            {displayErrorMassage.account |
            (transferResponse.error === 'Invalid account to') ? (
              <p className={style.authInputError}>???????????????? ?????????? ??????????</p>
            ) : (
              <></>
            )}
          </li>
          <li className={style.transferItem}>
            <label className={style.transferLabel} htmlFor='sum'>
              ??????????
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
              <p className={style.authInputError}>???????????????? ?????????? ????????????????</p>
            )}
          </li>
          <li className={style.transferItem}>
            <button className={style.transferFormSubmit} type='submit'>
              ??????????????????
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
