import billApiClient from "../../../api/billApiClient";
import { FETCH_BILL_LIST_SUCCESS } from "./types";

export const billListSuccess = (listOfBills) => ({
  type: FETCH_BILL_LIST_SUCCESS,
  payload: listOfBills,
});

export const getCustomerBills = (token, customerId) => async (dispatch) => {
  try {
    const listOfBills = await billApiClient.getBillsForCustomer(token, customerId);
    dispatch(billListSuccess(listOfBills));
  } catch (error) {
    console.error("There was an error in action getCustomerBills:", error);
  }
};
