import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  cityReducer,
  authReducer,
});

export default rootReducer;
