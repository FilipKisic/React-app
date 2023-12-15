import React from "react";
import { useSelector } from "react-redux";
import { Button, Table } from "react-bootstrap";
import "./BillTable.css";

const BillsTable = () => {
  const listOfBills = useSelector((state) => state.billsReducer.listOfBills);
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  if (!listOfBills || listOfBills.length === 0) {
    return <p>No bills found for the selected customer</p>;
  }

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
                <Button variant="primary" onClick={() => console.log(bill.id)}>
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
