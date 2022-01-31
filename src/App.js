import React, { useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Loading from "./components/Loading";
import MessageBox from "./components/MessageBox";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import PlaydateForm from "./components/PlaydateForm";
import AllPlaydates from "./pages/AllPlaydates";
import PlaydateDetails from "./pages/PlaydateDetails";

import { useDispatch, useSelector } from "react-redux";
import { selectAppLoading } from "./store/appState/selectors";
import { getUserWithStoredToken } from "./store/user/actions";
import Homepage from "./pages/Homepage";

import "./App.css";
import Myprofile from "./pages/Myprofile";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigation />
      <MessageBox />

      {isLoading ? <Loading /> : null}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/myprofile" element={<Myprofile />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/playdateForm" element={<PlaydateForm />} />
        <Route path="/allplaydates" element={<AllPlaydates />} />
        <Route path="/playdates/:id" element={<PlaydateDetails />} />
      </Routes>
    </div>
  );
}

export default App;
