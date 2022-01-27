import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Button, Col, Row, Card } from "react-bootstrap";
//import { Next } from "react-bootstrap/esm/PageItem";
//import { Link } from "react-router-dom";

import { selectPlaydates } from "../../store/playdate/selectors";

import PlaydateCard from "../../components/AllPlaydates";
import { fetchPlaydates } from "../../store/playdate/actions";

import "./AllPlaydates.css";

export default function AllPlaydates() {
  const dispatch = useDispatch();
  const playdates = useSelector(selectPlaydates);

  useEffect(() => {
    dispatch(fetchPlaydates());
  }, [dispatch]);

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
                <b>Filter by:</b>
                ...
              </Row>
              <Row>
                <b>Order by:</b>
                ...
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
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
