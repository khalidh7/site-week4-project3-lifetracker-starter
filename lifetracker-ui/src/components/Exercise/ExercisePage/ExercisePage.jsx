import React from "react";
import "./ExercisePage.css";
import ExerciseGrid from "../ExerciseGrid/ExerciseGrid";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Api from "../../../utilities/api";

export default function ExercisePage({ user, setUserGlobal }) {
  const [exercise, setExercise] = useState();
  const [userid, setUserid] = useState(user?.id);

  useEffect(() => {
    const fetchData = async () => {
      setUserid(user.id);
      let data = await Api.exercises({ userid: userid });
      if (data?.exercises) {
        data = Array.from(data.exercises).reverse();
        setExercise(data);
      }
    };
    fetchData();
  }, [user]);

  const sortCards = (event) => {
    let newExercise = Array.from(exercise).reverse();
    setExercise(newExercise);
  };

  return (
    <>
      {user ? (
        <div className="exercise">
          <div className="exercise-header">
            <h1>Exercise</h1>
          </div>
          <div className="exercise-body">
            <Link to="/exercise/add" className="exercise-button">
              <Button variant="contained" color="primary">
                Add Exercise
              </Button>
            </Link>
            <Link className="exercise-button">
              <Button variant="contained" color="primary" onClick={sortCards}>
                Sort
              </Button>
            </Link>
            {exercise?.length > 0 ? (
              <ExerciseGrid exercise={exercise} />
            ) : (
              <h2>No exercises yet!</h2>
            )}
          </div>
        </div>
      ) : (
        <div className="notlogged">
          <h1>Welcome</h1>
          <h2>Please Login in to Access</h2>
          <Button href="/login" color="primary" variant="contained">
            Login
          </Button>
        </div>
      )}
    </>
  );
}
