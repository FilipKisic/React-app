import React, { useEffect, useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../redux/actions/authActions";
import "./LoginPage.css";
import "../AuthPage.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (auth.token) {
      navigate("/home");
    }
  }, [auth.token]);

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={4}>
          <Form onSubmit={handleLogin} className="auth-form">
            <h2 className="mb-4">Login</h2>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="bottom-spaced"
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
              className="login-button mt-3 w-100"
            >
              Login
            </Button>
            <Button
              variant="outline-dark"
              type="submit"
              className="register-button mt-3 w-100 border border-3"
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

export default LoginPage;
