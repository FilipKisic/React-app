import itemApiClient from "../../../api/itemApiClient";
import { FETCH_ITEM_LIST_SUCCESS } from "./types";

export const itemListSuccess = (listOfItems) => ({
  type: FETCH_ITEM_LIST_SUCCESS,
  payload: listOfItems,
});

export const getBillItems = (token, billId) => async (dispatch) => {
  try {
    const listOfItems = await itemApiClient.getItemsForBill(token, billId);
    dispatch(itemListSuccess(listOfItems));
  } catch (error) {
    console.error("There was an error in action getBillItems:", error);
  }
};
