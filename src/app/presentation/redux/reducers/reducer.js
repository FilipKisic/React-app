import { combineReducers } from "redux";
import authReducer from "./authReducer";
import customersReducer from "./customersReducer";
import billsReducer from "./billsReducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
  authReducer,
  customersReducer,
  billsReducer,
  itemsReducer,
});

export default rootReducer;
