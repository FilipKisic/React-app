import { LOGIN_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
  token: null,
  error: null,
  isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
        isLoggedIn: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: null,
        error: null,
        isLoggedIn: false,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload.error,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default authReducer;
