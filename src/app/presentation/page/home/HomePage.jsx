import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { fetchCities } from "../../redux/actions/cityActions";

const HomePage = ({ cities, fetchCities }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

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
      {
        isLoggedIn ? (
          <div>
            <p>Welcome! You are logged in.</p>
          </div>
        ) : (
          <div>
            <p>Please login to continue.</p>
          </div>
        )
      }

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
