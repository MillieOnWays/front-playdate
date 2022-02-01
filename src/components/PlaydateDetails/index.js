import React from "react";
import { Col, Container, Row, Card } from "react-bootstrap";
import moment from "moment";
import Avatar from "boring-avatars";
import { AVATAR_COLORS } from "../../config/constants";
import { CARD_COLORS } from "../../config/constants";
import defaultImage from "../../images/friends.jpg";

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

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function showPlaydateImage(playdateImage) {
    const image = playdateImage ? playdateImage : defaultImage;
    return image;
  }

  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Body style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
          <Row>
            <Col md={3}>
              <Card.Img
                variant="top"
                src={showPlaydateImage(image)}
                alt="playdate-image"
              />
            </Col>
            <Col md={9}>
              <h2>{name}</h2>
              <b>Created by: </b>{" "}
              <Avatar
                size={20}
                name={user.name ? user.name : "user"}
                variant="beam"
                colors={AVATAR_COLORS}
              />{" "}
              {firstLetterUpperCase(user.name ? user.name : "")}
              <br />
              <br />
              <b
                style={{
                  backgroundColor: `${CARD_COLORS[1]}`,
                  padding: "5px",
                  borderRadius: "25px",
                }}
              >
                {firstLetterUpperCase(tag ? tag : "No Tags")}
              </b>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="mt-3" bg="light">
        <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
          <b>Description</b>
        </Card.Header>
        <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
      </Card>

      <Col>
        <Card className="mt-3" bg="light">
          <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
            <b>Information:</b>
          </Card.Header>
          <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
            <p>
              <b>Date:</b> {date}
            </p>
            <p>
              <b>Start Time:</b> {convertedTime(startTime)}
            </p>

            <p>
              <b>End Time:</b> {endTime ? convertedTime(endTime) : "Not set"}
            </p>
            <p>
              <b>City:</b> {city}
            </p>
            <p>
              <b>Address:</b> {address}
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
}
