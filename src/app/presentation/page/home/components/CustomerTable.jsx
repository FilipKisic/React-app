import React from "react";
import { Button, Table } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "../HomePage.css";

const CustomerTable = ({
  handleSort,
  sortedColumn,
  currentCustomers,
  isLoggedIn,
  deleteCustomer,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.authReducer.token);

  const handleEdit = (customerId) => {
    navigate(`/customer-info/${customerId}`);
  };

  const handleDelete = async (customerId) => {
    await dispatch(deleteCustomer(token, customerId));
  };

  return (
    <Table striped bordered hover className="customer-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>ID {sortedColumn === "id"}</th>
          <th onClick={() => handleSort("name")}>Name</th>
          <th onClick={() => handleSort("surname")}>Surname</th>
          <th onClick={() => handleSort("email")}>Email</th>
          <th onClick={() => handleSort("telephone")}>Telephone</th>
          {isLoggedIn && <th>Actions</th>}
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
            {isLoggedIn && (
              <td>
                <Button
                  variant="primary"
                  onClick={() => handleEdit(customer.id)}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(customer.id)}
                >
                  Delete
                </Button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CustomerTable;
