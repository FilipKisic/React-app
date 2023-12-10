import { FETCH_CUSTOMERS_SUCCESS } from "./types";
import apiClient from "../../../api/apiClient";

export const customerListSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const getCustomers = (token) => async (dispatch) => {
  try {
    const customers = await apiClient.getCustomers(token);
    dispatch(customerListSuccess(customers));
  } catch (error) {
    console.error("There was an error in action getCustomers:", error);
  }
};