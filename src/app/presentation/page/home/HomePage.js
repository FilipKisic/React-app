import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchCities } from "../../redux/actions/cityActions";

const HomePage = ({ cities, fetchCities }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await fetchCities();
      setLoading(false);
    };

    fetch();
  }, [fetchCities]);

  return (
    <div>
      <h2>City List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {cities.map((city) => (
            <li key={city.id}>{city.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cities: state.cityReducer.cities,
});

export default connect(mapStateToProps, { fetchCities })(HomePage);
