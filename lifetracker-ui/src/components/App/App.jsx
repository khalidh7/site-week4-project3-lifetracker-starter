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
import ExerciseForm from "../Exercise/ExerciseForm/ExerciseForm";
import { useState, useEffect } from "react";
import Api from "../../utilities/api";
import NutritionPage from "../Nutrition/NutritionPage";

function App() {
  const [token, setToken] = useState();
  const [userGlobal, setUserGlobal] = useState();

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
    Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
      setUserGlobal(response);
    });
  }, [token]);

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
          <Route
            path="/activity"
            element={<ActivityPage user={userGlobal} />}
          />
          <Route path="/sleep" element={<SleepPage user={userGlobal} />} />
          <Route
            path="/nutrition"
            element={<NutritionPage user={userGlobal} />}
          />
          <Route
            path="/exercise"
            element={
              <ExercisePage user={userGlobal} setUserGlobal={setUserGlobal} />
            }
          />
          <Route
            path="/exercise/add"
            element={<ExerciseForm user={userGlobal} />}
          />
          <Route path="/sleep" element={<SleepPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
