import { FETCH_CUSTOMERS_SUCCESS } from "../actions/types";

const initialState = {
  customers: [],
};

const customersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS_SUCCESS:
      return {
        ...state,
        customers: action.payload,
      };
    default:
      return state;
  }
};

export default customersReducer;
