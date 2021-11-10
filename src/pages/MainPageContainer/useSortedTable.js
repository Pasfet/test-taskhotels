export const sortedHelper = (sortBy, ascending, list) => {
  const copyList = [...list];
  const sortedList = copyList.sort((a, b) => {
    if (a[sortBy] < b[sortBy]) {
      return ascending === 'ascending' ? -1 : 1;
    }
    if (a[sortBy] > b[sortBy]) {
      return ascending === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  return sortedList;
};
