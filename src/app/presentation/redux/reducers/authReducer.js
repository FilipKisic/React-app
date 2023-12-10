import { LOGIN_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS } from "../actions/types";

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        error: null,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        token: null,
        error: null,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        token: null,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export default authReducer;
