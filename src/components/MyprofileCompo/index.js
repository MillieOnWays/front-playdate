import React, { useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { selectToken, selectUser } from "../../store/user/selectors";
import { selectAllKids } from "../../store/parents/selectors";

import "./profile.css";
import { addNewKidAction, updateKidAction } from "../../store/parents/actions";
import { useNavigate } from "react-router-dom";
import { selectOptions } from "@testing-library/user-event/dist/select-options";

export default function MyprofileCompo() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  console.log("user is", user);

  const allKids = useSelector(selectAllKids);
  console.log("allKids is", allKids);

  // const [avatar, setAvatar] = useState();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [interests, setInterests] = useState("");
  const [avatar, setAvatar] = useState("");

  console.log("kid name is", name);
  console.log("type of name is", typeof name);

  console.log("kid gender is", gender);
  console.log("kid birthDate is", birthDate);
  console.log("kid interests is", interests);
  console.log("kid avatar is", avatar);

  const [addRow, setAddRow] = useState(false);
  const [editRow, setEditRow] = useState(false);

  console.log("test editRow is:", editRow);

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
  const closeEdit = () => setEditRow(!editRow);

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

  const updateKid = (kidId) => {
    console.log("Im clicked");
    // dispatch(
    //   updateKidAction(avatar, name, gender, birthDate, interests, kidId)
    // );
  };

  const handleCheck = (id) => {
    setEditRow(!editRow);
    console.log("checked id is", id);
  };
  console.log("setEditRow", editRow);

  return (
    <div>
      <Container>
        <h2>{user.name}</h2>
        <img src="" alt="" />
        <p>{user.email}</p>
      </Container>
      <br />
      <br />

      <Container>
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
                <h4>interest</h4>
              </th>
              <th>
                <h4>Check for edit</h4>
              </th>
            </tr>
          </thead>

          <tbody>
            {/* Kids that are fetched from DB */}
            {allKids.map((kid, i) => (
              <tr key={i}>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      plaintext
                      defaultValue={kid.avatar}
                      onChange={(event) => setAvatar(event.target.value)}
                    />
                  </Form.Group>
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
                      onChange={(event) => setGender(event.target.value)}
                    ></Form.Control>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      plaintext
                      defaultValue={kid.birthDate}
                      onChange={(event) => setBirthDate(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      plaintext
                      defaultValue={mapInterests(kid.interests)}
                      onChange={(event) => setInterests(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                      type="checkbox"
                      label=""
                      onChange={handleCheck}
                    />
                  </Form.Group>
                  {/* <Button
                    variant="primary"
                    type="submit"
                    onClick={updateKid(kid.id)}
                  >
                    Edit
                  </Button> */}
                </td>
              </tr>
            ))}

            {/* Add kid row */}
            {!addRow ? null : (
              <tr>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      defaultValue=""
                      onChange={(event) => setAvatar(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      defaultValue=""
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      as="select"
                      // plaintext
                      defaultValue=""
                      onChange={(event) => setGender(event.target.value)}
                    >
                      <option disabled>select gender</option>
                      <option>f</option>
                      <option>m</option>
                    </Form.Control>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      type="date"
                      max={new Date().toISOString().split("T")[0]}
                      defaultValue=""
                      onChange={(event) => setBirthDate(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      defaultValue=""
                      onChange={(event) => setInterests(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Button variant="primary" type="submit" onClick={addNewKid}>
                    Add kid
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </Table>
        <Button onClick={showAddRow}>{!addRow ? "Add kids" : "Cancel"}</Button>
        {/* <Button onClick={addKid}>Add kids</Button> */}
      </Container>
      <br />
      <br />

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
                  <h4>interest</h4>
                </th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      // defaultValue={kid.avatar}
                      onChange={(event) => setAvatar(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      // defaultValue={kid.name}
                      onChange={(event) => setName(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      as="select"
                      // plaintext
                      // defaultValue={kid.gender}
                      onChange={(event) => setGender(event.target.value)}
                    >
                      <option disabled>select gender</option>
                      <option>f</option>
                      <option>m</option>
                    </Form.Control>
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      type="date"
                      max={new Date().toISOString().split("T")[0]}
                      // plaintext
                      // defaultValue={kid.birthDate}
                      onChange={(event) => setBirthDate(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Control
                      // plaintext
                      // defaultValue={mapInterests(kid.interests)}
                      onChange={(event) => setInterests(event.target.value)}
                    />
                  </Form.Group>
                </td>
                <td>
                  <Button
                    variant="primary"
                    type="submit"
                    // onClick={updateKid(kid.id)}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Container>
      )}
    </div>
  );
}
