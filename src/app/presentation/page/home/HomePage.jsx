import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, connect } from "react-redux";
import { Table, Pagination, Dropdown, Row, Col } from "react-bootstrap";
import { getCustomers } from "../../redux/actions/customerActions";
import "./HomePage.css";

const HomePage = ({ customers, getCustomers }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [customersPerPage, setCustomersPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: "asc",
  });

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const token = useSelector((state) => state.authReducer.token);

  //FETCH
  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      await getCustomers(token);
      setLoading(false);
    };

    fetch();
  }, [getCustomers, token]);

  //SORTING
  const sortedCustomers = () => {
    if (!sortOrder.column) return customers;

    return customers.slice().sort((a, b) => {
      const colA = a[sortOrder.column];
      const colB = b[sortOrder.column];

      if (colA < colB) {
        return sortOrder.direction === "asc" ? -1 : 1;
      } else if (colA > colB) {
        return sortOrder.direction === "asc" ? 1 : -1;
      }

      return 0;
    });
  };

  const handleSort = (column) => {
    console.log("SORT CLICKED!");
    setSortOrder((prevState) => ({
      ...prevState,
      column,
      direction:
        prevState.column === column && prevState.direction === "asc"
          ? "desc"
          : "asc",
    }));
  };

  //SEARCH
  const filteredCustomers = sortedCustomers().filter((customer) =>
    Object.values(customer)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  //PAGINATION
  const totalPages = Math.ceil(customers.length / customersPerPage);

  const currentCustomers = filteredCustomers.slice(
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
          <input
            className="search-input"
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <Table striped bordered hover className="customer-table">
            <thead>
              <tr>
                <th onClick={() => handleSort("id")}>ID</th>
                <th onClick={() => handleSort("name")}>Name</th>
                <th onClick={() => handleSort("surname")}>Surname</th>
                <th onClick={() => handleSort("email")}>Email</th>
                <th onClick={() => handleSort("telephone")}>Telephone</th>
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
                  <Dropdown.Toggle id="dropdown-customers-per-page">
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
