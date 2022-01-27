import React from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import { Link, Router } from "react-router-dom";

export default function HomepageCompo() {
  return (
    <div>
      <Link to="/create">
        <Button>Create Playdate</Button>
      </Link>

      <br />

      {/* This container is for filtters */}
      <Container>
        <h3>Filters/Sort</h3>
        <p>Filters:</p>

        <Form.Group as={Col} controlId="formState">
          <Form.Label>By City</Form.Label>
          <Form.Control
            as="select"
            name="state"
            placeholder="Choose your prefered city"
            // onChange={}
          >
            {/* Here we nedd to map the cities that are fetched from the DB */}
            <option value="">City Name....</option>
          </Form.Control>
        </Form.Group>
      </Container>

      {/* Here we need to map the playDate table */}

      <Container>
        <Table>
          <Row>
            {/* image column */}
            <Col>
              {/* The image of playdate */}
              <img src="/" alt="" />
            </Col>
            {/* details column */}
            <Col>
              <Row>
                <Col>
                  <h4>PlayDate Name comes here</h4>
                </Col>
                <Col>
                  <h4>Playdate Date comes here</h4>
                </Col>
              </Row>
              <Row>
                <Col colSpan="2">
                  <p>Playdate Description comes here</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p>Created by: Parent Name comes here</p>
                </Col>
                <Col>
                  <Link to="/Playdate detail page">
                    <Button>Read more</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Table>
      </Container>
    </div>
  );
}

// Filter the query

// Router.get("/", async (req,res,next)=>{

//     const res = await playdate.findAll({
//         where: { city : "cityName"}
//     })
// ...(Other necessary thing)
// })
