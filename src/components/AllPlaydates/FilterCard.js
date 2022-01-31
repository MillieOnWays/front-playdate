import React from "react";
import {
  Button,
  //Col,
  //Container,
  //Row,
  Card,
  Form,
} from "react-bootstrap";
//import { Link } from "react-router-dom";
//import moment from "moment";
import { useState } from "react";

export default function FilterCard(props) {
  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Filter</b>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>
              <b>By City</b>
            </Form.Label>
            <Form.Control
              as="select"
              value={props.filterCity}
              onChange={(e) => props.setFilterCity(e.target.value)}
            >
              <option value="">All cities</option>
              <option value="Almere">Almere</option>
              <option value="Amsterdam">Amsterdam</option>
            </Form.Control>
            <br />
            <Form.Label>
              <b>By Date</b>
            </Form.Label>
            <Form.Control
              value={props.filterDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={(e) => props.setFilterDate(e.target.value)}
              type="date"
            />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
