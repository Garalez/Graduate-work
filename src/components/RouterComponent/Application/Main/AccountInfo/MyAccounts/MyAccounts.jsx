import style from '../AccountInfo.module.scss';
import PropTypes from 'prop-types';
import { formatDate } from '../../../../../../utils/formatDate';
// import { useDispatch } from 'react-redux';
// import { userAccountInfoRequestAsync } from
//   '../../../../../../store/accountInfoRequest/accountInfoRequestActions';
import { useNavigate } from 'react-router-dom';

export const MyAccounts = ({ account }) => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const handleClick = () => {
    navigate(`/a/t/?id=${account.account}`);
    // dispatch(userAccountInfoRequestAsync(account.account));
  };

  return (
    <li className={style.accountItem} onClick={() => handleClick()}>
      <p className={style.accountNumber}>{account.account}</p>
      <p className={style.accountAmount}>{`${account.balance} ₽`}</p>
      <div className={style.accountInfo}>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>открыт</p>
          <p className={style.accountInfoText}>
            {account.date ? formatDate(account.date) : `---`}
          </p>
        </div>
        <div className={style.accountInfoTextWrapper}>
          <p className={style.accountInfoText}>последняя операция</p>
          <p className={style.accountInfoText}>
            {formatDate(account.transactions[0].date)}
          </p>
        </div>
      </div>
    </li>
  );
};

MyAccounts.propTypes = {
  account: PropTypes.object,
};
