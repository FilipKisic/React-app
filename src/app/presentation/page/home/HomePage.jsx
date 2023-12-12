import React, { useEffect, useState } from "react";
import { connect, useSelector } from "react-redux";
import {
  getCustomers,
  deleteCustomer,
} from "../../redux/actions/customerActions";
import { Row, Col } from "react-bootstrap";

import "./HomePage.css";
import CustomerQuantityPicker from "./components/CustomerQuantityPicker";
import CustomerTable from "./components/CustomerTable";
import SearchBar from "./components/SearchBar";
import TablePagination from "./components/TablePagination";

const HomePage = ({ customers, getCustomers, deleteCustomer }) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [customersPerPage, setCustomersPerPage] = useState(10);
  const [sortOrder, setSortOrder] = useState({
    column: null,
    direction: "asc",
  });

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
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <CustomerTable
            customers={filteredCustomers}
            handleSort={handleSort}
            sortedColumn={sortOrder.column}
            currentCustomers={currentCustomers}
            isLoggedIn={isLoggedIn}
            deleteCustomer={deleteCustomer}
          />
          <Row className="justify-content-center">
            <Col xs="auto">
              <TablePagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
            </Col>
            <Col xs="auto">
              <CustomerQuantityPicker
                customersPerPage={customersPerPage}
                setCustomersPerPage={setCustomersPerPage}
              />
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

export default connect(mapStateToProps, { getCustomers, deleteCustomer })(
  HomePage
);
