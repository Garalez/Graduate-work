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
