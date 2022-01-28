import React from "react";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

export default function OrderCard(playdate) {
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Order</b>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicSelect">
            <Form.Control
              as="select"
              //value="something"
              //onChange={}
            >
              <option value="latest">Latest</option>
              {/* <option value="title">Title</option>
                      <option value="parent">Parent</option>
                      <option value="city">City</option>
                      <option value="date">Date</option> */}
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
