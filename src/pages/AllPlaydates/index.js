import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button, Card } from "react-bootstrap";
//import { Next } from "react-bootstrap/esm/PageItem";

import { useNavigate } from "react-router";
import { selectPlaydates } from "../../store/playdate/selectors";
import { selectToken } from "../../store/user/selectors";

import { Link } from "react-router-dom";

import FilterCard from "../../components/AllPlaydates/FilterCard";
import OrderCard from "../../components/AllPlaydates/OrderCard";
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
          <Link to={`/playdateForm`}>
            <Button className="mt-5" style={{ width: "100%" }}>
              Create Playdate
            </Button>
          </Link>

          <OrderCard />
          <FilterCard />
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
                createdAt={playdate.createdAt}
                image={playdate.image}
              />
            );
          })}
        </Col>
      </Row>
    </Container>
  );
}
