import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";
import { BUTTON_COLOR } from "../../config/constants";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ padding: ".5rem 1rem" }}>{user.email}</Nav.Item>
      <Button
        style={{
          marginRight: "10px",
          marginLeft: "10px",
          backgroundColor: `${BUTTON_COLOR}`,
          borderColor: `${BUTTON_COLOR}`,
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}
