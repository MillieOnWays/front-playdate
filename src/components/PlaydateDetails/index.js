import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import moment from "moment";

export default function PlaydateDetailsCard(props) {
  const {
    name,
    image,
    date,
    startTime,
    endTime,
    description,
    city,
    tag,
    address,
    user,
  } = props.playdateDetails;

  const convertedTime = (time) => {
    return moment(time).format("LT");
  };

  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Header>
          <Row>
            <Col md={3}>
              <Card.Img variant="top" src={image} alt="playdate-image" />
            </Col>
            <Col md={{ span: 5, offset: 0 }} style={{ textAlign: "left" }}>
              <h2>{name}</h2>
            </Col>
            <Col md={{ span: 4, offset: 8 }} style={{ textAlign: "right" }}>
              <Link to={`/allplaydates/`}>
                <Button>Join</Button>
              </Link>
            </Col>
            <Col md={{ span: 4, offset: 3 }} style={{ textAlign: "left" }}>
              <p>
                Created by: <strong>{user.name}</strong>
              </p>
            </Col>
          </Row>
        </Card.Header>
      </Card>

      <Card>
        <Card.Header>
          <Row>
            <Col md={9}>
              <h3>Description</h3>
            </Col>
          </Row>
        </Card.Header>
        <Card.Body>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <Col>
        <Card className="mt-5" bg="light">
          <Card.Header>
            <b>Information:</b>
          </Card.Header>
          <Card.Body>
            <Row>Tag: #{tag}</Row>
            <Row>Date: {date}</Row>
            <Row>Start Time: {convertedTime(startTime)}</Row>
            <Row>End Time: {convertedTime(endTime)}</Row>
            <Row>City: {city}</Row>
            <Row>Address: {address}</Row>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
