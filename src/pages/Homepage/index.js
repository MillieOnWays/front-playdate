import React from "react";
import { Button } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageCompo from "../../components/HomepageCompo";
import { selectToken } from "../../store/user/selectors";

import "./Homepage.css";

export default function Homepage() {
  const token = useSelector(selectToken);

  return (
    <div>
      {token === null ? (
        <div>
          <img
            src="https://res.cloudinary.com/dkdzt4lca/image/upload/v1643271918/Sheyla/playdate_at_hands_on_ohxgsb.png"
            alt=""
          />
          <br />

          <h2 style={{ margin: "10px 100px" }}>
            play date ?!!!! challenging task ?!!!! not any more here we provide
            you with a cool platform where you can create you own play date and
            join the other parents pre-set play dates ....coool ?!!!!!! <br />
            <br />
            how ?!!! easy .
            <br />
            1:signup <br />
            2:create your profile then you are good to go
          </h2>
          <Link to="/login">
            <Button>Set Your Playdate</Button>
          </Link>
        </div>
      ) : (
        <HomepageCompo />
      )}
    </div>
  );
}
