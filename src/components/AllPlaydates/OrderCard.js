import React from "react";
import { Button, Card } from "react-bootstrap";

export default function OrderCard(props) {
  return (
    <Card className="mt-5" bg="light">
      <Card.Header>
        <b>Sort by</b>
      </Card.Header>
      <Card.Body>
        <Button style={{ width: "100%" }} onClick={props.sortPlaydatesBy}>
          {props.toggle ? "Date ↑" : "Date ↓"}
        </Button>
      </Card.Body>
    </Card>
  );
}
