import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function PlaydateCard(playdate) {

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Header>
          <Row>
            <Col md={4}>
              <b>{firstLetterUpperCase(playdate.playdateName)}</b>
            </Col>
            <Col md={{ span: 7, offset: 1 }} style={{ textAlign: "right" }}>
            ➤ <b>{playdate.city}{", "}{playdate.date}</b>
            </Col>
          </Row>
        </Card.Header>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src="https://i.imgur.com/qxF6O7I.jpeg" />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Card.Text>{firstLetterUpperCase(playdate.description)}</Card.Text>
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer>
          <Row>
            <Col className="text-muted">
              Created by: <b>{firstLetterUpperCase(playdate.creatorName)}</b>
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
