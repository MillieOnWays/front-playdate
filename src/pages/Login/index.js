import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { login } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import "./Login.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(login(email, password));

    setEmail("");
    setPassword("");
  }

  return (
    <Container className="mt-5">
      <Card>
        {/* <Card.Img variant="top" src="../../../images/friends.jpg" /> */}
        <Card.Header style={{ backgroundColor: "LightPink" }}>
          <b>Login</b>
        </Card.Header>
        <Card.Body style={{ backgroundColor: "pink", textAlign: "center" }}>
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <Form.Group controlId="formBasicEmail">
              <Form.Label>
                <b>Email address</b>
              </Form.Label>
              <Form.Control
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mt-3" controlId="formBasicPassword">
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Password"
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button variant="primary" type="submit" onClick={submitForm}>
                Log in
              </Button>
            </Form.Group>
            <Form.Group className="mt-3" style={{ marginBottom: "200px" }}>
              <Link to="/signup" style={{ textAlign: "center" }}>
                Click here to sign up
              </Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
