import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaydates } from "../../store/playdate/actions";

export default function OrderCard(playdate) {
  const dispatch = useDispatch();

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [order, setOrder] = useState("");
  const [orderBy, setOrderBy] = useState("");

  console.log("order outside function:", order, orderBy);

  function changeOrder(e) {
    console.log("triggered?", order, orderBy);
    e.preventDefault();
    //dispatch(fetchPlaydates(order, orderBy));
  }
  console.log("order outside AFTER function:", order, orderBy);
  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Order</b>
      </Card.Header>
      <Card.Body>
        <Form onChange={changeOrder}>
          <Form.Group controlId="formBasicSelect">
            <Form.Control
              as="select"
              disabled
              value={orderBy}
              onChange={(e) => setOrderBy(e.target.value)}
            >
              <option value="latest">Latest</option>
              <option value="title">Title</option>
              <option value="user">Parent</option>
              <option value="city">City</option>
              <option value="date">Date</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicSelect">
            <Form.Control
              as="select"
              disabled
              value={order}
              onChange={(e) => setOrder(e.target.value)}
            >
              <option value="DESC">Descending ↓</option>
              <option value="ASC">Ascending ↑</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
