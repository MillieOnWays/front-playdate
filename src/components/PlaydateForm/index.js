import { Container, Form, Image, Col, Row, Card } from "react-bootstrap";
import { useState, useEffect } from "react";

import topImg from "../../images/playdate1.jpg";

export default function PlaydateForm() {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <>
      {/* <div>
        <Image src={topImg} alt="playdate image" />
      </div> */}
      <Card
        className="mt-5"
        style={{
          width: "70rem",
          backgroundColor: "#FFB6C1",
          //   backgroundImage: "url(" + bgImg + ")",
          //   backgroundSize: "",
          alignSelf: "center",
          marginLeft: "17%",

          borderWidth: "5px",
        }}
      >
        <Card.Img
          variant="top"
          src={topImg}
          style={{ width: "100%", height: "14vw" }}
        />
        <Card.Header
          className="text-center"
          style={{ fontWeight: "bold", fontSize: "25px" }}
        >
          Let's have a Playdate
        </Card.Header>
        <Card.Body>
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Label>Playdate Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="What you wanna call to your playdate"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridDate">
                  <Form.Label>Choose Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridStartTime">
                      <Form.Label>Choose Start Time</Form.Label>
                      <Form.Control type="time" required />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridEndTime">
                      <Form.Label>Choose End Time</Form.Label>
                      <Form.Control type="time" />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </Col>
              <Col>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridImage">
                      <Form.Label>
                        Wanna set theme image for playdate?
                      </Form.Label>

                      <Form.Control
                        type="text"
                        placeholder="Paste imageUrl here"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mt-4">
                      <Form.Label> </Form.Label>
                      <Image src={imageUrl} alt="preview" thumbnail />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formGridDiscription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="text" as="textarea" />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
