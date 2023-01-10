import style from './DoughnutGraph.module.scss';
import { ReactComponent as Income } from './img/income.svg';
import { ReactComponent as Expenses } from './img/expenses.svg';
import { Chart as ChartJS, Title, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

export const DoughnutGraph = () => {
  ChartJS.register(Title, ArcElement, Legend, Tooltip);

  const options = {
    cutout: '80%',
    borderRadius: 30,
    rotation: 88,
    spacing: 2,
  };

  const data = {
    datasets: [
      {
        data: [31, 7],
        backgroundColor: ['#B865D6', '#4B00CA'],
        borderColor: 'transparent',
      },
    ],
  };
  return (
    <section className={style.graphInfoWrapper}>
      <h2 className={style.graphTitle}>Статистика</h2>
      <div className={style.graphDataWrapper}>
        <ul className={style.graphDateList}>
          <li className={style.graphDateItem}>Неделя</li>
          <li className={style.graphDateItem}>Месяц</li>
          <li className={style.graphDateItem}>Год</li>
        </ul>
        <div className={style.graphWrapper}>
          <Doughnut data={data} options={options} />
        </div>
        <ul className={style.graphBalanceList}>
          <li className={style.graphBalanceItem}>
            <p className={style.graphBalanceItemText}>Баланс</p>
            <p className={style.graphBalanceItemText}>
              <Income /> Доходы
            </p>
            <p className={style.graphBalanceItemText}>
              <Expenses /> Расходы
            </p>
          </li>
          <li className={style.graphBalanceItem}>
            <p className={style.graphBalanceItemSum}>530 080 ₽</p>
            <p className={style.graphBalanceItemSum}>503 934 ₽</p>
            <p className={style.graphBalanceItemSum}>26 146 ₽</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
