import { FETCH_CITIES_SUCCESS } from "./types";
import todoApiClient from "../../../api/apiClient";

export const fetchCitiesSuccess = (cities) => ({
  type: FETCH_CITIES_SUCCESS,
  payload: cities,
});

export const fetchCities = () => async (dispatch) => {
  try {
    const cities = await todoApiClient.getCities();
    dispatch(fetchCitiesSuccess(cities));
  } catch (error) {
    console.error("Error fetching cities:", error);
  }
};
