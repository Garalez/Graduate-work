import style from './Transactions.module.scss';
import { ReactComponent as BackArrow } from './img/backArrow.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export const Transactions = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  Tooltip.positioners.myCustomPositioner = function (elements, eventPosition) {
    return {
      x: eventPosition.x,
      y: eventPosition.y,
    };
  };

  const options = {
    responsive: true,
    elements: {
      line: {
        borderJoinStyle: 'round',
      },
    },
    scales: {
      y: {
        border: {
          display: false,
        },
        ticks: {
          maxTicksLimit: 5,
          color: '#C6B6D7',
          font: {
            family: 'Nunito',
            weight: 400,
            size: 15,
          },
          callback: (value) => `${value} ₽ `,
        },
        grid: {
          color: '#210B36',
        },
      },
      x: {
        ticks: {
          color: '#C6B6D7',
          font: {
            family: 'Nunito',
            weight: 400,
            size: 15,
          },
        },
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      tooltip: {
        position: 'myCustomPositioner',
        yAlign: 'bottom',
        callbacks: {
          label: (tooltipItems) => `${tooltipItems.formattedValue} ₽`,
          title: () => '',
        },
        bodyFont: {
          family: 'Nunito',
          weight: 700,
          size: 15,
        },
        padding: {
          right: 12,
          top: 4,
          bottom: 4,
          left: 12,
        },
        backgroundColor: '#210B36',
        displayColors: false,
      },
    },
  };

  const labels = [
    'Янв',
    'Фев',
    'Март',
    'Апр',
    'Май',
    'Июнь',
    'Июль',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ];

  const data = {
    labels,
    datasets: [
      {
        data: [
          { y: 2500, x: 'Янв' },
          { y: 4000, x: 'Март' },
          { y: 1500, x: 'Май' },
          { y: 2300, x: 'Июнь' },
          { y: 1800, x: 'Июль' },
          { y: 2900, x: 'Авг' },
          { y: 2500, x: 'Сен' },
          { y: 3500, x: 'Окт' },
          { y: 2800, x: 'Ноя' },
          { y: 4700, x: 'Дек' },
        ],
        borderColor: '#B865D6',
        backgroundColor: '#392350',
        pointBackgroundColor: '#FFFFFF',
        borderWidth: 5,
        hitRadius: 15,
        pointStyle: 'circle',
        pointHoverRadius: 10,
        radius: 0,
        hoverBorderColor: '#392350',
        hoverRadius: 1,
        hoverBorderWidth: 5,
      },
    ],
  };
  return (
    <section className={style.transactions}>
      <div className={style.transactionsTitleWrapper}>
        <h1 className={style.transactionsTitle}>Счет №449488503980</h1>
        <button className={style.transactionsBtn}>
          <BackArrow /> Вернуться
        </button>
      </div>
      <div className={style.infoWrapper}>
        <div className={style.lineGraphWrapper}>
          <div className={style.lineGraphOptions}>
            <div className={style.lineGraphDynamic}>
              <p className={style.lineGraphDynamicText}>Динамика</p>
              <p className={style.lineGraphDynamicYear}>2022</p>
            </div>
            <p className={style.lineGraphDynamicDateSelect}>Год</p>
          </div>
          <Line className={style.lineGraph} options={options} data={data} />
        </div>
        <div className={style.historyWrapper}>
          <h2 className={style.historyTitle}>История переводов</h2>
          <div className={style.historyTableWrapper}>
            <table className={style.historyTable}>
              <thead className={style.historyTableThead}>
                <tr className={style.historyTableRow}>
                  <th className={style.historyTableHeading}>Счет</th>
                  <th className={style.historyTableHeading}>Сумма</th>
                  <th className={style.historyTableHeading}>Дата</th>
                </tr>
              </thead>
              <tbody>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>2843746737</td>
                  <td className={style.historyTableCell}>+2389</td>
                  <td className={style.historyTableCell}>23.04.2022</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>9383874484</td>
                  <td className={style.historyTableCell}>+384</td>
                  <td className={style.historyTableCell}>10.03.2022</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>9388484949</td>
                  <td className={style.historyTableCell}>-23</td>
                  <td className={style.historyTableCell}>12.01.2022</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>2327473848</td>
                  <td className={style.historyTableCell}>+7689</td>
                  <td className={style.historyTableCell}>03.01.2022</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>0349823828</td>
                  <td className={style.historyTableCell}>+11094</td>
                  <td className={style.historyTableCell}>01.01.2022</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>2234884943</td>
                  <td className={style.historyTableCell}>+234</td>
                  <td className={style.historyTableCell}>15.12.2021</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>6754859385</td>
                  <td className={style.historyTableCell}>-340</td>
                  <td className={style.historyTableCell}>05.12.2021</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>4785645679</td>
                  <td className={style.historyTableCell}>+15949</td>
                  <td className={style.historyTableCell}>30.11.2021</td>
                </tr>
                <tr className={style.historyTableRow}>
                  <td className={style.historyTableCell}>2843746737</td>
                  <td className={style.historyTableCell}>+5094</td>
                  <td className={style.historyTableCell}>27.11.2021</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
