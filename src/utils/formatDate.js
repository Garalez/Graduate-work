export const formatDate = (date) => {
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Intl.DateTimeFormat('ru', options).format(new Date(date));
};

const monthsRegex = /[\w | г.]/g;

export const formatDateToMonths = (date) => {
  let string = new Intl.DateTimeFormat('ru', { dateStyle: 'medium' })
    .format(new Date(date))
    .replace(monthsRegex, '');

  if (string === 'мая') {
    string = 'май';
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const filterDatesByCurrentWeek = (arr, period) => {
  let timePeriod;
  if (period === 'week') timePeriod = 7;
  if (period === 'month') timePeriod = 30;

  const now = new Date();
  const numDay = now.getDate();

  const start = new Date(now);
  start.setDate(numDay - timePeriod);
  start.setHours(0, 0, 0, 0);

  const end = new Date(now);
  end.setDate(numDay - timePeriod);
  end.setHours(0, 0, 0, 0);

  const findFirstDateOfPeriod = arr.reverse().find(
    (elem) => new Date(elem.date).getTime() >= +end
  );
  console.log('findFirstDateOfPeriod', findFirstDateOfPeriod);
  return [findFirstDateOfPeriod, arr[arr.length - 1]];
};
