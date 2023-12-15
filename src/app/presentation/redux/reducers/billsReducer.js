import { FETCH_BILL_LIST_SUCCESS } from "../actions/types";

const initialState = { listOfBills: [] };

const billsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BILL_LIST_SUCCESS:
      return {
        ...state,
        listOfBills: action.payload,
      };
    default:
      return state;
  }
};

export default billsReducer;
