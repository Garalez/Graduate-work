import style from './Transactions.module.scss';
import { ReactComponent as BackArrow } from './img/backArrow.svg';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

export const Transactions = () => {
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      },
    },
    plugins: {
      title: {
        display: false,
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
        data: [3, 2, 1, 5, 6, 7, 2, 1, 5],
        borderColor: '#B865D6',
        borderWidth: 5,
        backgroundColor: 'white',
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
