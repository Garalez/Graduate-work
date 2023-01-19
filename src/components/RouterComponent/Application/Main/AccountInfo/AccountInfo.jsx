import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userAccountsRequestAsync }
  from '../../../../../store/accountsRequest/accountsRequestActions';
import style from './AccountInfo.module.scss';
import { ReactComponent as Arrow } from './img/arrow.svg';
import MyAccounts from './MyAccounts';

export const AccountInfo = () => {
  const dispatch = useDispatch();
  const userAccounts = useSelector((state) => state.userAccounts);

  useEffect(() => {
    dispatch(userAccountsRequestAsync());
  }, []);
  return (
    <section className={style.account}>
      <div className={style.accountWrapper}>
        <div className={style.accountTitleWrapper}>
          <h1 className={style.accountTitle}>Здравствуйте, Александр!</h1>
          <button className={style.accountBtn}>Открыть новый счет</button>
        </div>
        <div className={style.accountInfoWrapper}>
          <p className={style.accountSubtitle}>Мои счета</p>
          <div className={style.accountSortWrapper}>
            <p className={style.accountSortText}>Сортировка:</p>
            <button className={style.accountSort}>
              По дате <Arrow />
            </button>
          </div>
        </div>
        <ul className={style.accountList}>
          {userAccounts.accounts.map((account) => (
            <MyAccounts key={account.account} account={account} />
          ))}
        </ul>
      </div>
    </section>
  );
};
