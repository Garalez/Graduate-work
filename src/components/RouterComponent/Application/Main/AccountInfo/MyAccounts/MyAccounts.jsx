import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../../../utils/formatDate';
import { useNavigate } from 'react-router-dom';

export const MyAccounts = ({ account }) => {
  const navigate = useNavigate();

  return (
    <li
      className={style.accountItem}
      onClick={() =>
        navigate(`/application/transactions/?id=${account.account}`)
      }
    >
      <p className={style.accountNumber}>{account.account}</p>
      <p className={style.accountAmount}>{`${account.balance.toFixed(2)} ₽`}</p>
      <div className={style.accountInfo}>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>открыт</p>
          <p className={style.accountInfoText}>
            {account.date ? formatDate(account.date) : '---'}
          </p>
        </div>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>последняя операция</p>
          <p className={style.accountInfoText}>
            {account.transactions.length > 0 ?
              formatDate(account.transactions[0].date) :
              '---'}
          </p>
        </div>
      </div>
    </li>
  );
};

MyAccounts.propTypes = {
  account: PropTypes.object,
};
