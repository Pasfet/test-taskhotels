export const declOfNum = (number, titles) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export const getLimitDays = (from, end) => {
  const fromDate = new Date(from).getDate();
  const endDate = new Date(end).getDate();
  const days = fromDate - endDate;

  return Math.abs(days);
};

export const findElement = (elemId, inputSearch, array) => {
  return array?.find(item => item?.[inputSearch] === elemId);
};
