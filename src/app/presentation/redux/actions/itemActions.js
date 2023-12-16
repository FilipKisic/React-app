import itemApiClient from "../../../api/itemApiClient";
import { DELETE_CUSTOMER_SUCCESS, FETCH_ITEM_LIST_SUCCESS } from "./types";

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

export const deleteItemSuccess = (itemId) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload: itemId,
});

export const deleteItem = (token, itemId) => async (dispatch) => {
  try {
    await itemApiClient.deleteItem(token, itemId);
    dispatch(deleteItemSuccess(itemId));
  } catch (error) {
    console.error("There was an error in action deleteItem:", error);
  }
};

