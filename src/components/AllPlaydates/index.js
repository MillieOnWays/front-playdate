import React from "react";
import { Button, Col, Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import defaultImage from "../../images/friends.jpg";
import moment from "moment";
import Avatar from "boring-avatars";
import {
  AVATAR_COLORS,
  CARD_COLORS,
  BUTTON_COLOR,
} from "../../config/constants";
import "../../App.css";

export default function PlaydateCard(playdate) {
  function showPlaydateImage(playdateImage) {
    const image = playdateImage ? playdateImage : defaultImage;
    return image;
  }

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
          <Row>
            <Col md={4}>
              <b>{firstLetterUpperCase(playdate.playdateName)}</b>
            </Col>
            <Col md={{ span: 7, offset: 1 }} style={{ textAlign: "right" }}>
              ➤{" "}
              <b>
                {playdate.city}
                {", "}
                {moment(playdate.date).format("MMM Do YY")}
              </b>
            </Col>
          </Row>
        </Card.Header>
        <Row>
          <Col md={3}>
            <Card.Img variant="top" src={showPlaydateImage(playdate.image)} />
          </Col>
          <Col md={9}>
            <Card.Body>
              <Card.Text>
                {firstLetterUpperCase(playdate.description.slice(0, 200))}
                {"..."}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>

        <Card.Footer style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
          <Row>
            <Col sm={6} className="text-muted" style={{ position: "relative" }}>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  msTransform: "translateY(-50%)",
                }}
              >
                Created by:{" "}
                <Avatar
                  size={20}
                  name={playdate.creatorName}
                  variant="beam"
                  colors={AVATAR_COLORS}
                />{" "}
                <b>{firstLetterUpperCase(playdate.creatorName)}</b>
                {", "}
                {moment(playdate.createdAt).startOf("hour").fromNow()}
              </div>
            </Col>
            <Col sm={4} style={{ textAlign: "right" }}>
              <b
                style={{
                  backgroundColor: `${CARD_COLORS[1]}`,
                  padding: "5px",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
              >
                {firstLetterUpperCase(playdate.tag ? playdate.tag : "No Tags")}
              </b>
            </Col>
            <Col sm={2} style={{ textAlign: "right" }}>
              <Link to={`/playdates/${playdate.id}`}>
                <Button
                  style={{
                    backgroundColor: `${BUTTON_COLOR}`,
                    borderColor: `${BUTTON_COLOR}`,
                  }}
                >
                  Read more
                </Button>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  );
}
