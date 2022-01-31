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

export default function FilterCard(playdate) {
  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Filter</b>
      </Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicSelect">
            <Form.Control
              as="select"
              //value="something"
              //onChange={}
            >
              <option value="all">All cities</option>
              {/* <option value="almere">Almere</option>
                      <option value="amsterdam">Amsterdam</option> */}
            </Form.Control>
            <br />
            <Form.Control
              as="select"
              //value="something"
              //onChange={}
            >
              <option value="all">All Dates</option>
            </Form.Control>
            <br />
            <Form.Control
              as="select"
              //value="something"
              //onChange={}
            >
              <option value="all">All Start Times</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
  );
}
