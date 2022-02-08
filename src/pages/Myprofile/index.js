import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import MyprofileCompo from "../../components/MyprofileCompo";

import { fetchParentWithKids } from "../../store/parents/actions";

export default function Myprofile() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchParentWithKids());
  }, [dispatch]);

  // we need fetched data from db to send to MyprofileCompo
  return (
      <MyprofileCompo />
  );
}