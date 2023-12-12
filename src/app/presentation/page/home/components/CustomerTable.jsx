import React from "react";
import { Table } from "react-bootstrap";
import "../HomePage.css";

const CustomerTable = ({ handleSort, sortedColumn, currentCustomers }) => (
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
);

export default CustomerTable;
