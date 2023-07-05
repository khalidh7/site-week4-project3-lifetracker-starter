import "./App.css";
import React from "react";
import Navbar from "../Navbar/Navbar";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ActivityPage from "../ActivityPage/ActivityPage";
import ExercisePage from "../Exercise/ExercisePage/ExercisePage";
import SleepPage from "../Sleep/SleepPage/SleepPage";
import { useState } from "react";

function App() {
  const [token, setToken] = useState();
  const [userGlobal, setUserGlobal] = useState();

  return (
    <>
      <BrowserRouter>
        <Navbar
          token={token}
          user={userGlobal}
          setToken={setToken}
          setUser={setUserGlobal}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={
              <Login
                token={token}
                userGlobal={userGlobal}
                setToken={setToken}
                setUserGlobal={setUserGlobal}
              />
            }
          />
          <Route path="/register" element={<Signup />} />
          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/exercise" element={<ExercisePage />} />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
