import React from "react";
import { Card, Form } from "react-bootstrap";

import { CARD_COLORS } from "../../config/constants";

export default function FilterCard(props) {
  return (
    <Card className="mt-3" bg="light" >
      <Card.Header style={{ backgroundColor:`${CARD_COLORS[3]}`}}>
        <b>Filter by</b>
      </Card.Header>
      <Card.Body style={{ backgroundColor:`${CARD_COLORS[0]}` }}>
        <Form>
          <Form.Group controlId="formBasicSelect">
            <Form.Label>
              <b>City</b>
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

            <Form.Label className="mt-3">
              <b>Date</b>
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
