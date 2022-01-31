import React from "react";
import { Button, Row, Col, Image, Card, Container } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageCompo from "../../components/HomepageCompo";

import bg1 from "../../images/bg1.jpg";
import { selectToken } from "../../store/user/selectors";

import "./Homepage.css";
import { height } from "dom-helpers";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <div className="homePage">
      <div>
        <img
          src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643271918/Sheyla/playdate_at_hands_on_ohxgsb.png"
          alt=""
          style={{ width: "800px", height: "300px", marginLeft: "25%" }}
        />
        <br />

        <Container className="container">
          <img src={bg1} alt="" style={{ height: "500px", width: "100%" }} />
          <div className="top-left">
            <h2>
              Play date 🤔?!!!! Challenging task 😥?!!!! Not any more here we
              provide you with a cool platform where you can create you own play
              date and join the other parents pre-set play dates ....coool😎
              <br />
              How ?!!! easy....😃
              <br />
              <div>
                1:signup🧑🏼‍💻 <br />
                2:create your profile then you are good to go
              </div>
            </h2>
          </div>
        </Container>

        {/* <Link to="/login">
          <Button>Set Your Playdate</Button>
        </Link> */}
      </div>
    </div>
  );
}
