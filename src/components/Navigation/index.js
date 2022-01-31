import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import logoImg from "../../images/playdateimg.jpg";
import { Image } from "react-bootstrap";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        <Image
          src={logoImg}
          alt="Logo Image"
          style={{ width: "15%", borderRadius: "50px", marginLeft: "10px" }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav style={{ width: "100%" }} fill>
          <NavbarItem path="/" linkText="Home" /
          {token && (
            <NavbarItem path="/allplaydates" linkText="All Playdates" />
          )}
          {token && (
            <NavbarItem path="/playdateForm" linkText="Playdate_Form" />
                    {/* Add condition for showing My profile page when user is login */}
              {token === null ? null : (
          <NavbarItem path="/myprofile" linkText="My Profile" />
          )}
          {loginLogoutControls}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

