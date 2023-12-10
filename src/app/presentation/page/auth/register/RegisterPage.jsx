import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../../redux/actions/authActions";
import "../AuthPage.css";
import "./RegisterPage.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    dispatch(register(username, email, password));
    if (auth.error === undefined || auth.error === null) {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={4}>
          <Form onSubmit={handleRegister} className="auth-form">
            <h2 className="mb-4">Register</h2>
            <Form.Group controlId="formBasicUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                className="username-input bottom-spaced"
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="email-addres-input bottom-spaced"
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="register-button mt-3 w-100"
            >
              Register
            </Button>

            {auth.error && (
              <div className="error-message mt-3">{auth.error}</div>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
