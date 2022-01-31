import React from "react";
import { Card, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import { selectToken } from "../../store/user/selectors";

import "./Homepage.css";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <Container>
      <Card className="mt-5" bg="light">
        <Card.Img
          variant="top"
          src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643271918/Sheyla/playdate_at_hands_on_ohxgsb.png"
        />
        <Card.Body style={{ backgroundColor: "pink", textAlign: "center" }}>
          <Card.Text>
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
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
