import React from "react";
import { Button, Card } from "react-bootstrap";
import { CARD_COLORS, BUTTON_COLOR } from "../../config/constants";

export default function OrderCard(props) {
  return (
    <Card className="mt-3" bg="light">
      <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
        <b>Sort by</b>
      </Card.Header>
      <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
        <Button
          style={{
            width: "100%",
            backgroundColor: `${BUTTON_COLOR}`,
            borderColor: `${BUTTON_COLOR}`,
          }}
          onClick={props.sortPlaydatesBy}
        >
          {props.toggle ? "Date ↑" : "Date ↓"}
        </Button>
      </Card.Body>
    </Card>
  );
}
