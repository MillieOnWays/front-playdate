import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Col, Row, Button } from "react-bootstrap";

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

  const [currentPlaydates, setCurrentPlaydates] = useState(playdates);
  const [sortToggle, setSortToggle] = useState(false);

  const [filterDate, setFilterDate] = useState("");
  const [filterCity, setFilterCity] = useState("");

  useEffect(() => {
    setCurrentPlaydates(playdates);
  }, [playdates]);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    dispatch(fetchPlaydates());
  }, [dispatch, token, navigate]);

  useEffect(() => {
    //console.log("city:", filterCity, "Date", filterDate);
    if (!filterCity && !filterDate) {
      setCurrentPlaydates(playdates);
    } else if (!filterCity && filterDate) {
      setCurrentPlaydates(
        playdates.filter((playdate) => {
          return filterDate === playdate.date;
        })
      );
    } else if (filterCity && !filterDate) {
      setCurrentPlaydates(
        playdates.filter((playdate) => filterCity === playdate.city)
      );
    } else {
      setCurrentPlaydates(
        playdates.filter(
          (playdate) =>
            filterDate === playdate.date && filterCity === playdate.city
        )
      );
    }
  }, [filterCity, filterDate]);

  const sortPlaydatesBy = () => {
    const playdatesCopy = [...currentPlaydates];

    const sorted = playdatesCopy.sort(function (a, b) {
      const aDate = new Date(a.date);
      const bDate = new Date(b.date);

      const asc = aDate - bDate;
      const desc = bDate - aDate;

      return sortToggle ? asc : desc;
    });
    setSortToggle(!sortToggle);
    setCurrentPlaydates(sorted);
  };

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <Link to={`/playdateForm`}>
            <Button className="mt-5" style={{ width: "100%" }}>
              Create Playdate
            </Button>
          </Link>

          <OrderCard sortPlaydatesBy={sortPlaydatesBy} toggle={sortToggle} />
          <FilterCard
            filterCity={filterCity}
            filterDate={filterDate}
            setFilterCity={setFilterCity}
            setFilterDate={setFilterDate}
          />
        </Col>

        <Col sm={9}>
          {currentPlaydates.map((playdate) => {
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
