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

const sumOfPeriod = (transactions, account) => {
  let income = 0;
  let expenses = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].to === account) {
      income += transactions[i].amount;
    } else {
      expenses += transactions[i].amount;
    }
  }
  return { income: income.toFixed(2), expenses: expenses.toFixed(2) };
};

export const filterDatesByCurrentWeek = (arr) => {
  const transactions = arr.transactions;
  const now = new Date();
  const numDay = now.getDate();

  const week = new Date().setDate(numDay - 7);
  const month = new Date().setDate(numDay - 30);
  const year = new Date().setDate(numDay - 365);

  const yearTransactions = transactions.filter(
    (elem) => new Date(elem.date).getTime() >= +year
  );

  const monthTransactions = yearTransactions.filter(
    (elem) => new Date(elem.date).getTime() >= +month
  );

  const weekTransactions = monthTransactions.filter(
    (elem) => new Date(elem.date).getTime() >= +week
  );

  return {
    week: sumOfPeriod(weekTransactions, arr.account),
    month: sumOfPeriod(monthTransactions, arr.account),
    year: sumOfPeriod(yearTransactions, arr.account),
  };
};

export const filterUniqueDateValues = (arr, year) => {
  const tmpArray = [];

  const findUniqueDateValues = (item) => {
    const date = new Date(item.date);
    if (
      date.getFullYear() === +year &&
      tmpArray.indexOf(date.getMonth()) === -1
    ) {
      tmpArray.push(date.getMonth());
      return true;
    }
    return false;
  };

  return arr.filter((item) => findUniqueDateValues(item));
};
