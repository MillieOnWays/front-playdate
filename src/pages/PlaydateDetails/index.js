import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Card, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { selectPlaydateDetails } from "../../store/playdate/selectors";
import { fetchPlaydateDetails } from "../../store/playdate/actions";
import PlaydateDetailsCard from "../../components/PlaydateDetails";
import Avatars from "../../components/PlaydateDetails/Avatars";
import { selectToken } from "../../store/user/selectors";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
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
        <Col sm={3}>
          <Link to={`/allplaydates/`}>
            <Button className="mt-5" style={{ width: "100%" }}>
              Join
            </Button>
          </Link>
          <Card className="mt-3" bg="light">
            <Card.Header style={{ backgroundColor: "LightPink" }}>
              <b>Joined parents</b>
            </Card.Header>
            <Card.Body style={{ backgroundColor: "Pink" }}>
              <Avatars />
            </Card.Body>
          </Card>
        </Col>

        <Col sm={9}>
          {details && (
            <PlaydateDetailsCard key={details.id} playdateDetails={details} />
          )}
        </Col>
      </Row>
    </Container>
  );
}
