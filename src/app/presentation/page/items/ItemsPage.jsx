import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getBillItems } from "../../redux/actions/itemActions";
import "./ItemsPage.css";

const ItemsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const bill = location.state.bill;
  const listOfItems = useSelector((state) => state.itemsReducer.listOfItems);

  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    dispatch(getBillItems(token, bill.id));
  }, []);

  return (
    <div>
      <h2>Bill Items</h2>
      <Table striped bordered hover className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Id</th>
            <th>Quantity</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {listOfItems.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.productId}</td>
              <td>{item.quantity}</td>
              <td>{item.totalPrice}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemsPage;
