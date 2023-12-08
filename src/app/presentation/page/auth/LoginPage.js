import React, { useState, useEffect } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/authActions";

import "./LoginPage.css";

const LoginPage = () => {
  console.log("LoginPage rendered");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token || null);
  const error = useSelector((state) => state.auth.error || null);

  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  useEffect(() => {
    if (token !== null && token !== undefined) {
      navigate("/home");
    }
  }, [token, navigate]);

  useEffect(() => {
    if (error !== null && error !== undefined) {
      console.log("Error happend:", error);
    }
  }, [error]);

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <Form className="login-form" onSubmit={handleLogin}>
            <h2 className="mb-4">Login</h2>
            <Form.Group class>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Form.Group>
            <Button className="submit-button" variant="primary" type="submit">
              Login
            </Button>
            {error && <h3 className="text-danger mt-3">{error}</h3>}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
