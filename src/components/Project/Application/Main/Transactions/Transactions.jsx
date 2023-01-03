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

  const options = {
    responsive: true,
    scales: {
      y: {
        border: {
          display: false,
        },
        ticks: {
          callback: function (value) {
            return `${value} ₽`;
          },
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Chart',
      },
      tooltip: {
        intersect: false,
        backgroundColor: '#210B36',
        padding: '12px',
        borderRadius: '15px',
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
        data: [2300, 4000, 1700, 2300, 1800, 3000, 2600, 3500, 2800, 4800],
        borderColor: '#B865D6',
        backgroundColor: '#392350',
        pointBackgroundColor: '#FFFFFF',
        borderWidth: 5,
        hitRadius: 15,
        pointStyle: 'circle',
        pointHoverRadius: 10,
        radius: 0,
        hoverBorderColor: '#392350',
        hoverRadius: 5,
        hoverBorderWidth: 5,
        borderJoinStyle: 'round',
      },
    ],
  };
  return (
    <section className={style.transactions}>
      <div>
        <h1>Счет №449488503980</h1>
        <button>
          <BackArrow /> Вернуться
        </button>
      </div>
      <div className={style.graphWrapper}>
        <Line className={style.graph} options={options} data={data} />
      </div>
    </section>
  );
};
