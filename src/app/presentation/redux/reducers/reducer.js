import { combineReducers } from "redux";
import authReducer from "./authReducer";
import customersReducer from "./customersReducer";
import billsReducer from "./billsReducer";

const rootReducer = combineReducers({
  authReducer,
  customersReducer,
  billsReducer
});

export default rootReducer;
