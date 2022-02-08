import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { CARD_COLORS, BUTTON_COLOR } from "../../config/constants";
import { selectToken } from "../../store/user/selectors";

import "./Homepage.css";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <Container>
      <Row className="mt-5">
        <Col md={3}>
          <Card.Img
            variant="top"
            src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643271918/Sheyla/playdate_at_hands_on_ohxgsb.png"
            alt="playdate-img"
          />
        </Col>

        <Col md={9}>
          <Card.Body
            style={{
              //backgroundColor: `${CARD_COLORS[0]}`,
              textAlign: "center",
            }}
          >
            <Card.Text>
              <h1>
                Do you think a play date is a challenging task for you 😥?!
              </h1>
              <h1> Not anymore! 🥳</h1>
              <h4>
                <p>
                  Here we provide a COOL platform where you can create your own
                  event
                </p>{" "}
                <p>
                  and/or join other parents pre-set play dates.{" "}
                  <strong>Isn't it amazing?!</strong>
                  😎
                </p>
              </h4>
              <h5>How?! Just in one click...😉</h5>
              <div>
                <h5>
                  <Button
                    className="mt-3"
                    href="/signup"
                    size="lg"
                    style={{
                      backgroundColor: `${BUTTON_COLOR}`,
                      borderColor: `${BUTTON_COLOR}`,
                    }}
                  >
                    {" "}
                    🧑🏼‍💻 Sign up!{" "}
                  </Button>{" "}
                </h5>
              </div>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>

      <Card.Img
        className="mt-5"
        variant="top"
        src="https://cdn.discordapp.com/attachments/935829006681505822/938099595802726441/Z.png"
        alt="playdate-img"
      />
    </Container>
  );
}
