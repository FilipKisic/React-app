import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import { Pagination } from "react-bootstrap/esm";
import { getCustomers } from "../../redux/actions/customerActions";
import "./HomePage.css";

const HomePage = ({ customers, getCustomers }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const token = useSelector((state) => state.authReducer.token);

  const ITEMS_PER_PAGE = 10;

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getCustomers(token);
      setLoading(false);
    };

    fetch();
  }, [getCustomers, token]);

  const totalPages = Math.ceil(customers.length / ITEMS_PER_PAGE);

  const currentCustomers = customers.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div>
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
        <div>
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
              {currentCustomers.map((customer) => (
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

          <Pagination className="choose-page">
            <Pagination.Prev
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 0}
            />
            {Array.from({ length: totalPages }, (_, i) => (
              <Pagination.Item
                key={i}
                active={i === currentPage}
                onClick={() => setCurrentPage(i)}
              >
                {i + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
            />
          </Pagination>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, { getCustomers })(HomePage);
