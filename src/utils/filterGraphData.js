export const filterGraphData = (transactions, year) => {
  const formatDateToYear = (date) =>
    new Intl.DateTimeFormat('ru', { year: 'numeric' }).format(new Date(date));

  const lastTransactionDate = formatDateToYear(year);

  return transactions.filter(
    (el) => formatDateToYear(el.date) === formatDateToYear(lastTransactionDate)
  );
};
