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
        }
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
        hoverRadius: 1,
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
