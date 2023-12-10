import { LOGIN_SUCCESS, AUTH_FAILURE, REGISTER_SUCCESS } from "./types";
import authClient from "../../../api/authClient";

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const registerSuccess = () => ({
  type: REGISTER_SUCCESS,
});

export const authFailure = (error) => ({
  type: AUTH_FAILURE,
  payload: { error },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const token = await authClient.login(email, password);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};

export const register = (username, email, password) => async (dispatch) => {
  try {
    await authClient.register(username, email, password);
    dispatch(registerSuccess());
  } catch (error) {
    dispatch(authFailure(error.message));
  }
};
