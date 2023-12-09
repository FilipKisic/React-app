import { AUTH_SUCCESS, AUTH_FAILURE } from "./types";
import authClient from "../../../api/authClient";

export const authSuccess = (token) => ({
  type: AUTH_SUCCESS,
  payload: { token },
});

export const authFailure = (error) => ({
  type: AUTH_FAILURE,
  payload: { error },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const token = await authClient.login(email, password);
    dispatch(authSuccess(token));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    const token = await authClient.register(username, email, password);
    dispatch(authSuccess(token));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};
