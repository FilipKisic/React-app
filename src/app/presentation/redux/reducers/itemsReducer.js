import { FETCH_ITEM_LIST_SUCCESS } from "../actions/types";

const initialState = { listOfItems: [] };

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ITEM_LIST_SUCCESS:
      return {
        ...state,
        listOfItems: action.payload,
      };
    default:
      return state;
  }
};

export default itemsReducer;
