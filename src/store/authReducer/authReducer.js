import { LOG_IN, SET_AUTH, LOG_OUT, CLEAR_AUTH } from '../types/authTypes';

const initialState = {
  isAuth: false,
  email: null,
  password: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_AUTH:
      return {
        ...state,
        isAuth: true,
        email: payload.email.value,
        password: payload.password.value,
      };
    case CLEAR_AUTH:
      return {
        isAuth: false,
        email: null,
        password: null,
      };
    default:
      return state;
  }
};

export default authReducer;

export const setAuth = user => ({ type: SET_AUTH, payload: user });
export const logInAC = auth => ({ type: LOG_IN, payload: auth });
export const logOutAC = () => ({ type: CLEAR_AUTH });
export const logOut = () => ({ type: LOG_OUT });
