import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card, Form, FormGroup } from "react-bootstrap";
//import { Next } from "react-bootstrap/esm/PageItem";
//import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { selectPlaydates } from "../../store/playdate/selectors";
import { selectToken } from "../../store/user/selectors";

import PlaydateCard from "../../components/AllPlaydates";
import { fetchPlaydates } from "../../store/playdate/actions";

import "./AllPlaydates.css";

export default function AllPlaydates() {
  const navigate = useNavigate();
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const playdates = useSelector(selectPlaydates);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    dispatch(fetchPlaydates());
  }, [dispatch, token, navigate]);

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Card className="mt-5" bg="light">
            <Card.Header>
              <b>Find Playdate</b>
            </Card.Header>
            <Card.Body>
              <Row>
                <Form>
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>
                      <b>Order by:</b>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      value="something"
                      //onChange={}
                    >
                      <option value="latest">Latest</option>
                      {/* <option value="title">Title</option>
                      <option value="parent">Parent</option>
                      <option value="city">City</option>
                      <option value="date">Date</option> */}
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Row>
              <Row className="mt-3">
                <Form>
                  <Form.Group controlId="formBasicSelect">
                    <Form.Label>
                      <b>Filter by:</b>
                    </Form.Label>
                    <br />
                    <Form.Control
                      as="select"
                      value="something"
                      //onChange={}
                    >
                      <option value="all">All cities</option>
                      {/* <option value="almere">Almere</option>
                      <option value="amsterdam">Amsterdam</option> */}
                    </Form.Control>
                    <br />
                    <Form.Control
                      as="select"
                      value="something"
                      //onChange={}
                    >
                      <option value="all">All Dates</option>
                    </Form.Control>
                    <br />
                    <Form.Control
                      as="select"
                      value="something"
                      //onChange={}
                    >
                      <option value="all">All Start Times</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={8}>
          {playdates.map((playdate) => {
            return (
              <PlaydateCard
                key={playdate.id}
                id={playdate.id}
                playdateName={playdate.name}
                description={playdate.description}
                date={playdate.date}
                city={playdate.city}
                tag={playdate.tag}
                creatorName={playdate.user.name}
                creatorAvatar={playdate.user.avatar}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
