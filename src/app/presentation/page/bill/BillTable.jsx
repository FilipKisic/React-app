import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import "./BillTable.css";
import { useNavigate } from "react-router-dom";

const BillsTable = () => {
  const navigate = useNavigate();
  const listOfBills = useSelector((state) => state.billsReducer.listOfBills);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  if (!listOfBills || listOfBills.length === 0) {
    return <p>No bills found for the selected customer</p>;
  }

  const handleItems = (bill) => {
    navigate(`/items`, { state: { bill } });
  };

  return (
    <Table striped bordered hover className="customer-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Bill Number</th>
          <th>Date</th>
          <th>Comment</th>
          {isLoggedIn && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {listOfBills.map((bill) => (
          <tr key={bill.id}>
            <td>{bill.id}</td>
            <td>{bill.billNumber}</td>
            <td>{bill.date}</td>
            <td>{bill.comment}</td>
            {isLoggedIn && (
              <td>
                <Button variant="primary" onClick={() => handleItems(bill)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => console.log(bill.id)}>
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

export default BillsTable;
