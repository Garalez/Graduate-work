import style from './Transactions.module.scss';
import { ReactComponent as BackArrow } from './img/backArrow.svg';
import LineGraph from './LineGraph';
import DoughnutGraph from './DoughnutGraph';
import Table from './Table';
import FundsTransfer from './FundsTransfer';

export const Transactions = () => {
  return (
    <section className={style.transactions}>
      <div className={style.transactionsTitleWrapper}>
        <h1 className={style.transactionsTitle}>Счет №449488503980</h1>
        <button className={style.transactionsBtn}>
          <BackArrow /> Вернуться
        </button>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.transactionsGraphs}>
          <LineGraph />
          <DoughnutGraph />
        </div>
          <Table />
      </div>
      <FundsTransfer />
    </section>
  );
};
