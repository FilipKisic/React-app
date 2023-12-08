import { LOGIN_SUCCESS, LOGIN_FAILURE } from "./types";
import authClient from "../../../api/authClient";

export const loginSuccess = (token) => ({
  type: LOGIN_SUCCESS,
  payload: { token },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export const login = (email, password) => async (dispatch) => {
  try {
    const token = await authClient.login(email, password);
    dispatch(loginSuccess(token));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
}
