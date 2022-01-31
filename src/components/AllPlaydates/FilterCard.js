import React from "react";
import {
  //Button,
  //Col,
  //Container,
  //Row,
  Card,
  Form,
} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import moment from "moment";
import { useState } from "react";

export default function FilterCard(playdate) {
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [cityFilter, setCityFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [startTimeFilter, setstartTimeFilter] = useState("");

  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Filter</b>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicSelect">
          <Form.Label><b>By City</b></Form.Label>
            <Form.Control
              as="select"
              disabled
              value={cityFilter}
              onChange={(e)=> setCityFilter(e.target.value)}
            >
              <option value="all">All cities</option>
              <option value="almere">Almere</option>
              <option value="amsterdam">Amsterdam</option>
            </Form.Control>
            </Form.Group>
            <br />
            <Form.Group className="mb-3" controlId="formGridDate">
                  <Form.Label><b>By Date</b></Form.Label>
                  <Form.Control
                    value={dateFilter}
                    disabled
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setDateFilter(e.target.value)}
                    type="date"
                  />
                </Form.Group>
            <br />
            <Form.Label><b>By Start Time</b></Form.Label>
            <Form.Control
              as="select"
              disabled
              //value="something"
              //onChange={}
            >
              <option value="all">All Start Times</option>
            </Form.Control>
          
        </Form>
      </Card.Body>
    </Card>
  );
}
