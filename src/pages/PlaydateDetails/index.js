import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { selectPlaydateDetails } from "../../store/playdate/selectors";
import { fetchPlaydateDetails } from "../../store/playdate/actions";
import PlaydateDetailsCard from "../../components/PlaydateDetails";
import Avatars from "../../components/PlaydateDetails/Avatars";
import { selectToken } from "../../store/user/selectors";
import { useNavigate } from "react-router";

import "./PlaydateDetails.css";

export default function PlaydateDetails() {
  const token = useSelector(selectToken);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();
  const details = useSelector(selectPlaydateDetails);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    dispatch(fetchPlaydateDetails(id));
  }, [dispatch, id, token, navigate]);

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Card className="mt-5" bg="light">
            <Card.Header>
              <b>Joined parents</b>
            </Card.Header>
            <Card.Body>
              <Row>All parents who joined</Row>
              <Avatars />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={8}>
          {details && (
            <PlaydateDetailsCard key={details.id} playdateDetails={details} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
