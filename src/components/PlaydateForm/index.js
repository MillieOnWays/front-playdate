import {
  Container,
  Form,
  Image,
  Col,
  Row,
  Card,
  Button,
} from "react-bootstrap";
import { useState, useEffect } from "react";

import topImg from "../../images/playdate1.jpg";

export default function PlaydateForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");

  const dateStartTime = `${date} ${startTime}`;
  const dateEndTime = `${date} ${endTime}`;
  function submitForm(e) {
    e.preventDefault();
  }

  return (
    <>
      {/* <div>
        <Image src={topImg} alt="playdate image" />
      </div> */}
      <Card
        className="mt-5 mb-5"
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
          style={{ fontWeight: "bold", fontSize: "30px", fontStyle: "italic" }}
        >
          Let's have a Playdate
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitForm}>
            <Row className="mb-3">
              <Col>
                <Form.Group className="mb-3" controlId="formGridName">
                  <Form.Label>Playdate Name</Form.Label>
                  <Form.Control
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="What you wanna call to your playdate"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGridDate">
                  <Form.Label>Choose Date</Form.Label>
                  <Form.Control
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    required
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Col>
                    <Form.Group controlId="formGridStartTime">
                      <Form.Label>Choose Start Time</Form.Label>
                      <Form.Control
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                        type="time"
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridEndTime">
                      <Form.Label>Choose End Time</Form.Label>
                      <Form.Control
                        type="time"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group controlId="formGridAddress">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </Form.Group>
                <Form.Group controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    required
                  />
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
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
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
                <Form.Group controlId="formGridTag">
                  <Form.Label>Tag</Form.Label>
                  <Form.Control
                    type="text"
                    value={tag}
                    onChange={(e) => setTag(e.target.value)}
                    placeholder="give tag e.g. park / water"
                    required
                  />
                </Form.Group>
                <Form.Group className="mt-4" controlId="formGridDiscription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    as="textarea"
                    placeholder="please describe more about playdate here"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group>
              <Button
                className="mt-3"
                type="submit"
                // variant="outline-danger"
                style={{
                  backgroundColor: "#F25278",
                  color: "black",
                  alignSelf: "center",
                  marginLeft: "40%",
                  fontSize: "20px",
                }}
              >
                Create a playdate
              </Button>
            </Form.Group>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}
