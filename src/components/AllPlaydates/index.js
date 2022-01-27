import React from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Row,
  Table,
  Card,
} from "react-bootstrap";
import { Link, Router } from "react-router-dom";

export default function PlaydateCard(playdate) {
  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Header>
          <Row>
            <Col md={4}>
              <b>{playdate.playdateName}</b>
            </Col>
            <Col md={{ span: 4, offset: 4 }} style={{ textAlign: "right" }}>
              <b>{playdate.date}</b>
            </Col>
          </Row>
        </Card.Header>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src="https://i.imgur.com/qxF6O7I.jpeg" />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Card.Text>{playdate.description}</Card.Text>
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer>
          <Row>
            <Col md={4} className="text-muted">
              Created by: <b>PARENT NAME</b>
            </Col>
            <Col md={{ span: 4, offset: 4 }} style={{ textAlign: "right" }}>
              <Link to={`/playdates/${playdate.id}`}>
                <Button>Read more</Button>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}

//style={{ borderColor: "red", borderStyle: "solid" }} FOR CHECKING LAYOUT
