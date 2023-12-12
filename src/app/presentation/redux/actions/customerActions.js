import { FETCH_CUSTOMERS_SUCCESS, DELETE_CUSTOMER_SUCCESS } from "./types";
import customerApiClient from "../../../api/customerApiClient";

export const customerListSuccess = (customers) => ({
  type: FETCH_CUSTOMERS_SUCCESS,
  payload: customers,
});

export const getCustomers = (token) => async (dispatch) => {
  try {
    const customers = await customerApiClient.getCustomers(token);
    dispatch(customerListSuccess(customers));
  } catch (error) {
    console.error("There was an error in action getCustomers:", error);
  }
};

export const customerDeleteSuccess = (customerId) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: customerId,
});

export const deleteCustomer = (token, id) => async (dispatch) => {
  try {
    await customerApiClient.deleteCustomer(token, id);
    dispatch(customerDeleteSuccess(id));
  } catch (error) {
    console.error("There was an error in action deleteCustomer:", error);
  }
};
