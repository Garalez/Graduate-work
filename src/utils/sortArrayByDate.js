export const sortArrayByDate = (arr) =>
  arr.sort((a, b) => {
    if (new Date(a.date).getTime() > new Date(b.date).getTime()) {
      return -1;
    }
  });
