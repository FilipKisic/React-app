import customerApiClient from "../../../api/customerApiClient";
import { DELETE_CUSTOMER_SUCCESS, FETCH_CUSTOMERS_SUCCESS, UPDATE_CUSTOMER_SUCCESS } from "./types";

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

export const customerUpdateSuccess = (customer) => ({
  type: UPDATE_CUSTOMER_SUCCESS,
  payload: customer,
});

export const updateCustomer = (token, customer) => async (dispatch) => {
  try {
    await customerApiClient.updateCustomer(token, customer);
    dispatch(customerUpdateSuccess(token, customer));
  } catch (error) {
    console.error("There was an error in action updateCustomer:", error);
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
