import {
  Form,
  Image,
  Col,
  Row,
  Card,
  Button,
  Container,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { newPlaydate } from "../../store/playdate/actions";
import { useNavigate } from "react-router-dom";
import topImg from "../../images/playdate1.jpg";
import { CARD_COLORS } from "../../config/constants";

export default function PlaydateForm() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [tag, setTag] = useState("");
  const [description, setDescription] = useState("");
  //const [validated, setValidated] = useState(false);

  const dateStartTime = `${date} ${startTime}`;
  const dateEndTime = `${date} ${endTime}`;
  const dispatch = useDispatch();

  function submitForm(e) {
    e.preventDefault();
    dispatch(
      newPlaydate(
        name,
        date,
        dateStartTime,
        dateEndTime,
        address,
        city,
        image,
        tag,
        description
      )
    );
    navigate("/allplaydates");
  }

  return (
    <>
      {/* <div>
        <Image src={topImg} alt="playdate image" />
      </div> */}
      <Container>
        <Card
          className="mt-5"
          style={{
            alignSelf: "center",
          }}
        >
          <Card.Img variant="top" src={topImg} style={{ width: "100%" }} />
          <Card.Header
            className="text-center"
            style={{
              backgroundColor: `${CARD_COLORS[3]}`,
              fontSize: "30px",
            }}
          >
            Let's have a Playdate
          </Card.Header>
          <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
            <Form onSubmit={submitForm}>
              <Row>
                <Col sm={6} className="mt-3">
                  <Form.Group className="mb-3" controlId="formGridName">
                    <Form.Label>
                      <b>Playdate Name</b>
                    </Form.Label>
                    <Form.Control
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      maxLength={50}
                      placeholder="What you wanna call to your playdate?"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formGridDate">
                    <Form.Label>
                      <b>Choose Date</b>
                    </Form.Label>
                    <Form.Control
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      type="date"
                      required
                    />
                  </Form.Group>

                  <Row className="mt-3">
                    <Col>
                      <Form.Group controlId="formGridStartTime">
                        <Form.Label>
                          <b>Choose Start Time</b>
                        </Form.Label>
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
                        <Form.Label>
                          <b>Choose End Time</b>
                        </Form.Label>
                        <Form.Control
                          type="time"
                          value={endTime}
                          onChange={(e) => setEndTime(e.target.value)}
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group controlId="formGridAddress" className="mt-3">
                    <Form.Label>
                      <b>Address</b>
                    </Form.Label>
                    <Form.Control
                      type="text"
                      maxLength={60}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Please fill in the address."
                      required
                    />
                  </Form.Group>

                  <Form.Group controlId="formGridCity" className="mt-3">
                    <Form.Label>
                      <b>City</b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      maxLength={100}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    >
                      <option>Amsterdam</option>
                      <option>Almere</option>
                    </Form.Control>
                  </Form.Group>
                </Col>

                <Col sm={6}>
                  <Row>
                    <Col className="mt-3">
                      <Form.Group controlId="formGridImage">
                        <Form.Label>
                          <b>Set image for playdate?</b>
                        </Form.Label>

                        <Form.Control
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                          type="text"
                          placeholder="Paste imageUrl here"
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      {image ? (
                        <Form.Group className="mt-4">
                          <Form.Label> </Form.Label>
                          <Image src={image} alt="preview" thumbnail />
                        </Form.Group>
                      ) : null}
                    </Col>
                  </Row>

                  <Form.Group controlId="formGridTag" className="mt-3">
                    <Form.Label>
                      <b>Tag</b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      // type="text"
                      //value={tag}
                      onChange={(e) => setTag(e.target.value)}
                      // placeholder="Give tag e.g. park / water."
                      required
                    >
                      <option value="">Select tag</option>
                      <option value="park">Park</option>
                      <option value="cinema">Cinema</option>
                      <option value="zoo">Zoo</option>
                      <option value="pool">Pool</option>
                      <option value="cycling">Cycling</option>
                      <option value="forest">Forest</option>
                      <option value="walking">Walking</option>
                      <option value="party">Party</option>
                      <option value="farm">Farm</option>
                      <option value="playground">Playground</option>
                      <option value="themepark">Themepark</option>
                      <option value="shopping">Shopping</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group className="mt-3" controlId="formGridDiscription">
                    <Form.Label>
                      <b>Description</b>
                    </Form.Label>
                    <Form.Control
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      type="text"
                      maxLength={1000}
                      as="textarea"
                      placeholder="Please describe more about playdate here (max 1000 characters). "
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
                    backgroundColor: `${CARD_COLORS[1]}`,
                    borderColor: `${CARD_COLORS[3]}`,
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
      </Container>
    </>
  );
}
