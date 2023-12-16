import { DELETE_ITEM_SUCCESS, FETCH_ITEM_LIST_SUCCESS } from "../actions/types";

const initialState = { listOfItems: [] };

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_LIST_SUCCESS:
      return {
        ...state,
        listOfItems: action.payload,
      };
    case DELETE_ITEM_SUCCESS:
      const updatedItems = state.listOfItems.filter(
        (item) => item.id !== action.payload.itemId
      );
      return {
        ...state,
        listOfItems: updatedItems,
      };
    default:
      return state;
  }
};

export default itemsReducer;
