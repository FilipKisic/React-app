import { AUTH_SUCCESS, AUTH_FAILURE } from "../actions/types";

const initialState = {
  token: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
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
