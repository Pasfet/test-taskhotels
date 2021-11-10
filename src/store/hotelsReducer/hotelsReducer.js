import {
  ADD_TO_FAVORITE_HOTEL,
  CLEAR_HOTELS,
  FETCH_HOTELS,
  REMOVE_FROM_FAVORITE_HOTEL,
  SET_HOTELS,
  SORT_FAVORITE_HOTELS,
} from '../types/hotelsPageTypes';

const initialState = {
  hotelsList: [],
  favoritesList: [],
};

const hotelsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_HOTELS:
      return {
        ...state,
        hotelsList: payload,
      };
    case CLEAR_HOTELS:
      return {
        ...state,
        hotelsList: [],
        favoritesList: [],
      };
    case ADD_TO_FAVORITE_HOTEL:
      return {
        ...state,
        favoritesList: [...state.favoritesList, payload],
      };
    case REMOVE_FROM_FAVORITE_HOTEL:
      return {
        ...state,
        favoritesList: state.favoritesList.filter(hotel => hotel.hotelId !== payload),
      };
    case SORT_FAVORITE_HOTELS:
      return {
        ...state,
        favoritesList: payload,
      };
    default:
      return state;
  }
};

export default hotelsReducer;

export const fetchHotels = params => ({ type: FETCH_HOTELS, payload: params });
export const setHotels = hotelsList => ({ type: SET_HOTELS, payload: hotelsList });
export const clearHotels = () => ({ type: CLEAR_HOTELS });
export const addToFavorite = hotel => ({ type: ADD_TO_FAVORITE_HOTEL, payload: hotel });
export const removeFromFavorite = hotelId => ({
  type: REMOVE_FROM_FAVORITE_HOTEL,
  payload: hotelId,
});

export const sortFavoriteHotels = sortedList => ({
  type: SORT_FAVORITE_HOTELS,
  payload: sortedList,
});
