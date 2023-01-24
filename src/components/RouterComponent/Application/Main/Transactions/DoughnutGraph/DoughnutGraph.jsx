import style from './DoughnutGraph.module.scss';
import { ReactComponent as Income } from './img/income.svg';
import { ReactComponent as Expenses } from './img/expenses.svg';
import { Chart as ChartJS, Title, ArcElement, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const DoughnutGraph = ({ accountInfo }) => {
  console.log('accountInfo: ', accountInfo);
  const [graphData, setGraphData] = useState([]);

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
        data: graphData,
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
          <li className={style.graphDateItem}>
            <button
              className={style.graphButton}
              onClick={() =>
                setGraphData([
                  accountInfo.transactions.statisticGraph.week[0],
                  accountInfo.transactions.statisticGraph.week[1],
                ])
              }
            >
              Неделя
            </button>
          </li>
          <li className={style.graphDateItem}>
            <button
              className={style.graphButton}
              onClick={() =>
                setGraphData([
                  accountInfo.transactions.statisticGraph.month[0],
                  accountInfo.transactions.statisticGraph.month[1],
                ])
              }
            >
              Месяц
            </button>
          </li>
          <li className={style.graphDateItem}>
            <button
              className={style.graphButton}
              onClick={() =>
                setGraphData([
                  accountInfo.transactions.statisticGraph.year[0],
                  accountInfo.transactions.statisticGraph.year[1],
                ])
              }
            >
              Год
            </button>
          </li>
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
            <p
              className={style.graphBalanceItemSum}
            >{`${accountInfo.balance} ₽`}</p>
            <p className={style.graphBalanceItemSum}>{`${graphData[0]} ₽`}</p>
            <p className={style.graphBalanceItemSum}>{`${graphData[1]} ₽`}</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

DoughnutGraph.propTypes = {
  accountInfo: PropTypes.object,
};
