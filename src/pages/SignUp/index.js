import React, { useState, useEffect } from "react";
import { signUp } from "../../store/user/actions";
import { selectToken } from "../../store/user/selectors";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { Col, Card, Form, Button, Container } from "react-bootstrap";
import { BUTTON_COLOR } from "../../config/constants";
import "./SignUp.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== null) {
      navigate("/myprofile");
    }
  }, [token, navigate]);

  function submitForm(event) {
    event.preventDefault();

    dispatch(signUp(name, email, password));

    setEmail("");
    setPassword("");
    setName("");
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img
          variant="top"
          src={
            "https://nickolausconstruction.com/wp-content/uploads/2018/02/playground-banner.jpg"
          }
        ></Card.Img>
        <Card.Header
          style={{
            fontSize: "50px",
            textAlign: "center",
            backgroundColor: "LightPink",
          }}
        >
          Sign Up
        </Card.Header>
        <Card.Body
          style={{
            backgroundColor: "Pink",
            textAlign: "center",
            minHeight: "500px",
          }}
        >
          <Form as={Col} md={{ span: 6, offset: 3 }} className="mt-5">
            <Form.Group controlId="formBasicName">
              <Form.Label>
                <b>Name</b>
              </Form.Label>
              <Form.Control
                value={name}
                onChange={(event) => setName(event.target.value)}
                type="text"
                placeholder="Enter name"
                required
              />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mt-3">
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
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>
                <b>Password</b>
              </Form.Label>
              <Form.Control
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                type="password"
                placeholder="Enter password"
                required
              />
            </Form.Group>
            <Form.Group className="mt-3">
              <Button
                variant="primary"
                type="submit"
                onClick={submitForm}
                style={{
                  backgroundColor: `${BUTTON_COLOR}`,
                  borderColor: `${BUTTON_COLOR}`,
                }}
              >
                Sign up
              </Button>
            </Form.Group>
            <Form.Group className="mt-3">
              <Link to="/login">Click here to log in</Link>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
