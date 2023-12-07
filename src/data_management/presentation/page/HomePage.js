import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../redux/actions/cityActions";

const HomePage = ({ cities, fetchCities }) => {
  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return (
    <div>
      <h2>City List</h2>
      {cities ? (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cityReducer.cities,
});

export default connect(mapStateToProps, { fetchCities })(HomePage);
