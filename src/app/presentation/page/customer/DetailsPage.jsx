import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './DetailsPage.css';

const DetailsPage = () => {
  const location = useLocation();
  const customer = location.state;
  const [editedCustomer, setEditedCustomer] = useState(customer);

  // Handle form submission to update customer data
  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare updated customer data
    const updatedCustomerData = {
      id: editedCustomer.id,
      name: event.form.name.value,
      surname: event.form.surname.value,
      email: event.form.email.value,
      telephone: event.form.telephone.value,
    };

    // Update the editedCustomer state with the new data
    setEditedCustomer(updatedCustomerData);

    // Print the edited customer data to the console for now
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
              />
            </Form.Group>
          </Col>
        </Row>

        <Button variant="primary" type="submit" className="update-button">Update Customer</Button>
      </Form>
    </div>
  );
};

export default DetailsPage;
