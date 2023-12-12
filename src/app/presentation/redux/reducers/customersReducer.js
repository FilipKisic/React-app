import {
  DELETE_CUSTOMER_SUCCESS,
  FETCH_CUSTOMERS_SUCCESS,
} from "../actions/types";

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
    case DELETE_CUSTOMER_SUCCESS:
      const updatedCustomers = state.customers.filter(
        (customer) => customer.id !== action.payload.customerId
      );
      return {
        ...state,
        customers: updatedCustomers,
      };
    default:
      return state;
  }
};

export default customersReducer;
