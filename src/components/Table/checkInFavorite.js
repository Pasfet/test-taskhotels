export const checkInFavorite = (hotel, favoriteList) => {
  const find = favoriteList?.find(item => item.hotelId === hotel?.hotelId);
  if (find) {
    return true;
  }
  return false;
};
