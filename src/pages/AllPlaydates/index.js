import React from "react";
import { Button } from "react-bootstrap";
import { Next } from "react-bootstrap/esm/PageItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HomepageCompo from "../../components/HomepageCompo";
import { selectToken } from "../../store/user/selectors";

import "./allPlaydates.css";

export default function AllPlaydates() {
  return <div>This is the page with all Playdates.</div>;
}
