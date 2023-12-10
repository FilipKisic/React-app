import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { getCustomers } from "../../redux/actions/customerActions";

const HomePage = ({ customers, getCustomers }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getCustomers(token);
      setLoading(false);
    };

    fetch();
  }, [getCustomers, token]);

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

      <h2>Customers List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {customers.map((customer) => (
            <li key={customer.id}>{customer.name} {customer.surname}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, { getCustomers })(HomePage);
