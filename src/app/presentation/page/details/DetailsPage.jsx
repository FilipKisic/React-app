import React, { useState, useEffect } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import BillsTable from "../bill/BillTable";
import { getCustomerBills } from "../../redux/actions/billActions";
import "./DetailsPage.css";

const DetailsPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const customer = location.state;
  const [editedCustomer, setEditedCustomer] = useState(customer);

  const token = useSelector((state) => state.authReducer.token);

  useEffect(() => {
    const customerId = location.state.id;
    dispatch(getCustomerBills(token, customerId));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedEditedCustomer = { ...editedCustomer };
    updatedEditedCustomer[name] = value;
    setEditedCustomer(updatedEditedCustomer);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, surname, email, telephone } = event.target;

    const updatedCustomerData = {
      id: editedCustomer.id,
      name,
      surname,
      email,
      telephone,
    };

    setEditedCustomer(updatedCustomerData);
    console.log("Edited customer data:", editedCustomer);
  };

  return (
    <div>
      <h2>Customer Details</h2>

      <Form onSubmit={handleSubmit}>
        <Row>
          <Col sm={6}>
            <Form.Group controlId="id">
              <Form.Label>ID:</Form.Label>
              <Form.Control
                type="text"
                name="id"
                value={editedCustomer.id}
                readOnly
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Form.Group controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={editedCustomer.name}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>

          <Col sm={6}>
            <Form.Group controlId="surname">
              <Form.Label>Surname:</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={editedCustomer.surname}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={editedCustomer.email}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col sm={12}>
            <Form.Group controlId="telephone">
              <Form.Label>Telephone:</Form.Label>
              <Form.Control
                type="tel"
                name="telephone"
                value={editedCustomer.telephone}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="update-button">
          Update Customer
        </Button>
      </Form>

      <BillsTable />
    </div>
  );
};

export default DetailsPage;
