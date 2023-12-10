import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
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
    <div className="container">
      {isLoggedIn ? (
        <div>
          <p>Welcome! You are logged in.</p>
        </div>
      ) : (
        <div>
          <p>Please login to continue.</p>
        </div>
      )}

      <h2>Customers List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table striped bordered hover className="customer-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Telephone</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td>{customer.surname}</td>
                <td>{customer.email}</td>
                <td>{customer.telephone}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, { getCustomers })(HomePage);
