import React, { useEffect } from "react";
import "./ExerciseForm.css";
import { useState } from "react";
import Api from "../../../utilities/api";
import { useNavigate } from "react-router-dom";

export default function ExerciseForm({ user }) {
  let [date, setDate] = useState("");
  let [duration, setDuration] = useState("");
  let [type, setType] = useState("");
  let [rating, setRating] = useState("");
  let [userid, setUserId] = useState(user?.id);
  let [exerciseadd, setExerciseAdd] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    setUserId(user?.id);
  }, [user]);

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log("submit", rating, exerciseadd);
    Api.addExercise(exerciseadd);
    navigate("/exercise");
  }

  function handleValueChange(value, setValue) {
    setValue(value);
    // console.log("handleValueChange", value, typeof value);
    console.log("rating: " + rating);
    setExerciseAdd({
      userid: userid,
      date: date,
      duration: duration,
      type: type,
      rating: rating
    });
  }

  return (
    <div className="exerciseform-container">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="Date">Date MM/DD/YYYY:</label>
          <input
            type="date"
            id="date"
            onChange={(event) => {
              handleValueChange(event.target.value, setDate);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration in Hours:</label>
          <input
            type="duration"
            id="duration"
            onChange={(event) => {
              handleValueChange(event.target.value, setDuration);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input
            type="type"
            id="type"
            onChange={(event) => {
              handleValueChange(event.target.value, setType);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input
            type="text"
            id="rating"
            value={rating}
            onChange={(event) => {
              handleValueChange(event.target.value, setRating);
            }}
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={(event) => handleOnSubmit(event)}
        >
          Add Exercise
        </button>
      </form>
    </div>
  );
}
