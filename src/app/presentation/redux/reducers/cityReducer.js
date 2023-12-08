import { FETCH_CITIES_SUCCESS } from '../actions/types';

const initialState = {
  cities: [],
};

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITIES_SUCCESS:
      return {
        ...state,
        cities: action.payload,
      };
    default:
      return state;
  }
};

export default cityReducer;
