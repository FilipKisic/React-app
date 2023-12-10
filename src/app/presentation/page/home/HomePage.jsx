import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Table, Pagination, Dropdown, Row, Col } from "react-bootstrap";
import { getCustomers } from "../../redux/actions/customerActions";
import "./HomePage.css";

const HomePage = ({ customers, getCustomers }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [customersPerPage, setCustomersPerPage] = useState(10);

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

  const totalPages = Math.ceil(customers.length / customersPerPage);

  const currentCustomers = customers.slice(
    currentPage * customersPerPage,
    (currentPage + 1) * customersPerPage
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

          <Row className="justify-content-center">
          <Col xs="auto">
              <Pagination className="table-footer">
                <Pagination.Prev
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 0}
                />

                {Array.from({ length: totalPages }, (_, i) => {
                  const startPage = Math.max(0, currentPage - 2);
                  const endPage = Math.min(totalPages - 1, startPage + 4);

                  if (i >= startPage && i <= endPage) {
                    return (
                      <Pagination.Item
                        key={i}
                        active={i === currentPage}
                        onClick={() => setCurrentPage(i)}
                      >
                        {i + 1}
                      </Pagination.Item>
                    );
                  }

                  return null;
                })}

                <Pagination.Next
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages - 1}
                />
              </Pagination>
            </Col>
            <Col xs="auto">
              <div className="d-flex align-items-center table-footer">
                <Dropdown
                  onSelect={(value) => setCustomersPerPage(Number(value))}
                >
                  <Dropdown.Toggle
                    id="dropdown-customers-per-page"
                  >
                    {`Customers per Page: ${customersPerPage}`}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey="10">10</Dropdown.Item>
                    <Dropdown.Item eventKey="20">20</Dropdown.Item>
                    <Dropdown.Item eventKey="50">50</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  customers: state.customersReducer.customers,
});

export default connect(mapStateToProps, { getCustomers })(HomePage);
