// CustomersPerPageDropdown.js
import React from "react";
import { Dropdown } from "react-bootstrap";
import "../HomePage.css";

const CustomerQuantityPicker = ({ customersPerPage, setCustomersPerPage }) => (
  <div className="d-flex align-items-center table-footer">
    <Dropdown onSelect={(value) => setCustomersPerPage(Number(value))}>
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
);

export default CustomerQuantityPicker;
