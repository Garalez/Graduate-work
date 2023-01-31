import style from './Transactions.module.scss';
import { ReactComponent as BackArrow } from './img/backArrow.svg';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import Table from './Table';
import FundsTransfer from './FundsTransfer';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userAccountInfoRequestAsync } from
  '../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { useSelector } from 'react-redux';

export const Transactions = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const accountId = searchParams.get('id');
  const accountInfo = useSelector((state) => state.userAccountInfo);

  useEffect(() => {
    dispatch(userAccountInfoRequestAsync(accountId));
  }, []);

  return (
    <section className={style.transactions}>
      {Object.keys(accountInfo.accountInfo).length !== 0 && (
        <>
          <div className={style.transactionsTitleWrapper}>
            <h1
              className={style.transactionsTitle}
            >{`Счет №${accountInfo.accountInfo.account}`}</h1>
            <button
              className={style.transactionsBtn}
              onClick={() => navigate(-1)}
            >
              <BackArrow /> Вернуться
            </button>
          </div>
          <div className={style.infoWrapper}>
            <div className={style.transactionsGraphs}>
              <LineGraph accountInfo={accountInfo.accountInfo} />
              <DoughnutGraph accountInfo={accountInfo.accountInfo} />
            </div>
            <Table accountInfo={accountInfo.accountInfo} />
          </div>
          <FundsTransfer />
        </>
      )}
    </section>
  );
};
