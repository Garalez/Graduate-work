import style from './LineGraph.module.scss';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

export const LineGraph = ({ accountInfo }) => {
  const transactions = accountInfo.transactions;

  const filterGraphData = () => {
    const formatDateToYear = (date) =>
      new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(new Date(date));

    const lastTransactionDate = formatDateToYear(
      transactions[transactions.length - 1].date
    );

    return transactions.filter(
      (el) =>
        formatDateToYear(el.date) === formatDateToYear(lastTransactionDate)
    );
  };

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip
  );

  Tooltip.positioners.myCustomPositioner = function(elements, eventPosition) {
    return {
      x: eventPosition.x,
      y: eventPosition.y,
    };
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
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
          callback: (value) => ` ${value} ₽ `,
        },
        grid: {
          color: '#210B36',
        },
      },
      x: {
        ticks: {
          padding: 10,
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
      legend: {
        display: false,
      },
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

  // const labels = [
  //   'Янв',
  //   'Фев',
  //   'Март',
  //   'Апр',
  //   'Май',
  //   'Июнь',
  //   'Июль',
  //   'Авг',
  //   'Сен',
  //   'Окт',
  //   'Ноя',
  //   'Дек',
  // ];

  const monthsRegex = /[\w | г.]/g;
  const lastSumInMonth = () => {
    const formatDateToMonths = (date) =>
      new Intl.DateTimeFormat('ru', { dateStyle: 'medium' })
        .format(new Date(date))
        .replace(monthsRegex, '');
    const arr = [];

    filterGraphData().map(el => {
      arr.map(test => {
        if (formatDateToMonths(el.date) !== formatDateToMonths(test.date)) {
          arr.push(el);
        }
      });
    });
    console.log(arr);

    // filterGraphData().map(el => {

    // });
    // filterGraphData().map((obj) => {
    //   filterGraphData().map((el) => {
    //     if (
    //       formatDateToMonths(filterGraphData()[0].date) ===
    //       formatDateToMonths(el.date)
    //     ) {
    //       arr.push(filterGraphData()[el.date]);
    //     }
    //   });
    // });
    // console.log(arr);
    // filterGraphData().map((transaction) => {
    //   new Intl.DateTimeFormat('ru', { dateStyle: 'medium' }).format(
    //     new Date(transaction.date)
    //   );
    // });
  };

  lastSumInMonth();

  const data = {
    // labels,
    datasets: [
      {
        data: filterGraphData().map((transaction) => ({
          x: new Intl.DateTimeFormat('ru', { dateStyle: 'medium' })
            .format(new Date(transaction.date))
            .replace(monthsRegex, ''),
          y: transaction.amount,
        })),
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
    <div className={style.lineGraphUnderlay}>
      <div className={style.lineGraphWrapper}>
        <div className={style.lineGraphOptions}>
          <div className={style.lineGraphDynamic}>
            <p className={style.lineGraphDynamicText}>Динамика</p>
            <p className={style.lineGraphDynamicYear}>2022</p>
          </div>
          <p className={style.lineGraphDynamicDateSelect}>Год</p>
        </div>
        <div className={style.lineGraph}>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

LineGraph.propTypes = {
  accountInfo: PropTypes.object,
};
