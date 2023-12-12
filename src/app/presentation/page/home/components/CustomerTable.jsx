import React from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import "../HomePage.css";

const CustomerTable = ({
  handleSort,
  sortedColumn,
  currentCustomers,
  isLoggedIn,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEdit = (customerId) => {
    // Redirect to the CustomerInfo page with the customerId
    navigate(`/customer-info/${customerId}`);
  };

  const handleDelete = (customerId) => {
    // Implement logic to delete the customer with the given ID
    // You can dispatch an action to delete the customer using Redux
    //dispatch(deleteCustomer(customerId));
  };

  return (
    <Table striped bordered hover className="customer-table">
      <thead>
        <tr>
          <th onClick={() => handleSort("id")}>ID {sortedColumn === "id"}</th>
          <th onClick={() => handleSort("name")}>
            Name {sortedColumn === "name"}
          </th>
          <th onClick={() => handleSort("surname")}>
            Surname {sortedColumn === "surname"}
          </th>
          <th onClick={() => handleSort("email")}>
            Email {sortedColumn === "email"}
          </th>
          <th onClick={() => handleSort("telephone")}>
            Telephone {sortedColumn === "telephone"}
          </th>
          {isLoggedIn && (<th>Actions</th>)}
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
