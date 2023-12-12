import { combineReducers } from "redux";
import authReducer from "./authReducer";
import customersReducer from "./customersReducer";

const rootReducer = combineReducers({
  authReducer,
  customersReducer,
});

export default rootReducer;
