import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Form,
  Table,
  Card,
  Row,
  Col,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { selectAllKids } from "../../store/parents/selectors";
import { deleteKid } from "../../store/parents/actions";
import Avatar from "boring-avatars";
import {
  AVATAR_COLORS,
  CARD_COLORS,
  BUTTON_COLOR,
} from "../../config/constants";

import "./profile.css";
import { addNewKidAction } from "../../store/parents/actions";
import { useNavigate } from "react-router-dom";

export default function MyprofileCompo() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  const allKids = useSelector(selectAllKids);

  // const [avatar, setAvatar] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [interests, setInterests] = useState("");
  const [avatar, setAvatar] = useState("");

  const [addRow, setAddRow] = useState(false);
  const [editRow, setEditRow] = useState(false);

  useEffect(() => {
    if (token === null) {
      navigate("/");
    }
    setName("");
    setInterests("");
    setBirthDate("");
    setGender("");
  }, [setName, setInterests, setBirthDate, setGender, token]);

  const mapInterests = (interests) => {
    return interests.map((interests, i) => interests.name);
  };

  const showAddRow = () => setAddRow(!addRow);
  //const closeEdit = () => setEditRow(!editRow);

  const navigate = useNavigate();

  const addNewKid = (event) => {
    dispatch(addNewKidAction(avatar, name, gender, birthDate, interests));

    setAvatar("");
    setName("");
    setInterests("");
    setBirthDate("");
    setGender("");
    setAddRow(false);
    event.preventDefault();

    navigate("/myprofile");
  };

  // const updateKid = (kidId) => {
  //   // dispatch(
  //   //   updateKidAction(avatar, name, gender, birthDate, interests, kidId)
  //   // );
  // };

  const handleCheck = (id) => {
    setEditRow(!editRow);
  };

  function firstLetterUpperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const kidDelete = (id) => {
    dispatch(deleteKid(id));
  };

  return (
    <div>
      <Container>
        <Row>
          <Col sm={3}>
            <Card className="mt-5" bg="light">
              <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
                <b>Profile</b>
              </Card.Header>
              <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
                <Row>
                  <Avatar
                    size={50}
                    name={user.name ? user.name : "user"}
                    variant="beam"
                    colors={AVATAR_COLORS}
                  />
                </Row>
                <Row>
                  <h2 className="mt-5">
                    {user.name ? firstLetterUpperCase(user.name) : "user"}
                  </h2>{" "}
                  <p>
                    <b>Email: </b>
                    {user.email}
                  </p>
                  <Link to={`/playdateForm`}>
                    <Button
                      style={{
                        backgroundColor: `${BUTTON_COLOR}`,
                        borderColor: `${BUTTON_COLOR}`,
                      }}
                    >
                      Create your playdate
                    </Button>
                  </Link>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={9}>
            <Card className="mt-5" bg="light">
              <Card.Header style={{ backgroundColor: `${CARD_COLORS[3]}` }}>
                <b>Kids</b>
              </Card.Header>
              <Card.Body style={{ backgroundColor: `${CARD_COLORS[0]}` }}>
                <Table striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th>
                        <h4>Avatar</h4>
                      </th>
                      <th>
                        <h4>Kid name</h4>
                      </th>
                      <th>
                        <h4>Gender</h4>
                      </th>
                      <th>
                        <h4>Birth date</h4>
                      </th>
                      <th>
                        <h4>Interest</h4>
                      </th>
                      {/* <th>
                    <h4>Check for edit</h4>
                  </th> */}
                      <th><h4>Delete kid</h4></th>
                    </tr>
                  </thead>

                  <tbody>
                    {/* Kids that are fetched from DB */}
                    {allKids.map((kid, i) => (
                      <tr key={i}>
                        <td style={{ textAlign: "center" }}>
                          <Avatar
                            size={30}
                            name={name ? name : "user"}
                            variant="beam"
                            colors={AVATAR_COLORS}
                          />
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              plaintext
                              defaultValue={kid.name}
                              onChange={(event) => setName(event.target.value)}
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              plaintext
                              defaultValue={kid.gender}
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              plaintext
                              defaultValue={kid.birthDate}
                              onChange={(event) =>
                                setBirthDate(event.target.value)
                              }
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              plaintext
                              defaultValue={mapInterests(kid.interests)}
                              onChange={(event) =>
                                setInterests(event.target.value)
                              }
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group>
                            <Button onClick={() => kidDelete(kid.id)}>
                              {!addRow ? "Delete kid" : "Cancel"}
                            </Button>
                          </Form.Group>
                        </td>

                        {/* <td>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      >
                        <Form.Check
                          type="checkbox"
                          label=""
                          onChange={handleCheck}
                        />
                      </Form.Group> */}
                        {/* <Button
                    variant="primary"
                    type="submit"
                    onClick={updateKid(kid.id)}
                  >
                    Edit
                  </Button> */}
                        {/* </td> */}
                      </tr>
                    ))}

                    {/* Add kid row */}
                    {!addRow ? null : (
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          <Avatar
                            size={30}
                            name={name ? name : "user"}
                            variant="beam"
                            colors={AVATAR_COLORS}
                          />
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              defaultValue=""
                              onChange={(event) => setName(event.target.value)}
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              as="select"
                              //defaultValue=""
                              onChange={(event) =>
                                setGender(event.target.value)
                              }
                            >
                              <option value="">select gender</option>
                              <option value="f">female</option>
                              <option value="m">male</option>
                            </Form.Control>
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              type="date"
                              defaultValue=""
                              max={new Date().toISOString().split("T")[0]}
                              onChange={(event) =>
                                setBirthDate(event.target.value)
                              }
                            />
                          </Form.Group>
                        </td>
                        <td>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Control
                              defaultValue=""
                              onChange={(event) =>
                                setInterests(event.target.value)
                              }
                            />
                          </Form.Group>
                        </td>

                        <td>
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={addNewKid}
                            style={{
                              backgroundColor: `${BUTTON_COLOR}`,
                              borderColor: `${BUTTON_COLOR}`,
                            }}
                          >
                            Add kid
                          </Button>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </Table>
                <Button
                  onClick={showAddRow}
                  style={{
                    backgroundColor: `${BUTTON_COLOR}`,
                    borderColor: `${BUTTON_COLOR}`,
                  }}
                >
                  {!addRow ? "Add kids" : "Cancel"}
                </Button>
                {/* <Button onClick={addKid}>Add kids</Button> */}
                {/* Edit Table */}
                {!editRow ? null : (
                  <Container>
                    <Table striped bordered hover size="sm">
                      <thead>
                        <tr>Edit your kid</tr>
                        <tr>
                          <th>
                            <h4>Avatar</h4>
                          </th>
                          <th>
                            <h4>Kid name</h4>
                          </th>
                          <th>
                            <h4>Gender</h4>
                          </th>
                          <th>
                            <h4>Birth date</h4>
                          </th>
                          <th>
                            <h4>Interest</h4>
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                onChange={(event) =>
                                  setAvatar(event.target.value)
                                }
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                onChange={(event) =>
                                  setName(event.target.value)
                                }
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                onChange={(event) =>
                                  setGender(event.target.value)
                                }
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                type="date"
                                onChange={(event) =>
                                  setBirthDate(event.target.value)
                                }
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Form.Group controlId="formBasicEmail">
                              <Form.Control
                                onChange={(event) =>
                                  setInterests(event.target.value)
                                }
                              />
                            </Form.Group>
                          </td>
                          <td>
                            <Button
                              variant="primary"
                              type="submit"
                              style={{
                                backgroundColor: `${BUTTON_COLOR}`,
                                borderColor: `${BUTTON_COLOR}`,
                              }}
                            >
                              Edit
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Container>
                )}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
