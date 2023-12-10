import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import authReducer from "./authReducer";
import customersReducer from "./customersReducer";

const rootReducer = combineReducers({
  cityReducer,
  authReducer,
  customersReducer,
});

export default rootReducer;
