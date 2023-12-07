import { combineReducers } from 'redux';
import cityReducer from '../reducers/cityReducer';

const rootReducer = combineReducers({
  cityReducer,
  // Add other reducers here if needed
});

export default rootReducer;
