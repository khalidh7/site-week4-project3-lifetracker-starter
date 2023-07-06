import React, { useEffect } from "react";
import "./ExerciseForm.css";
import { useState } from "react";
import Api from "../../../utilities/api";
import { useNavigate } from "react-router-dom";

export default function ExerciseForm({ user }) {
  let [userid, setUserId] = useState(user?.id);
  let [formData, setFormData] = useState({ userid: userid });
  const navigate = useNavigate();

  useEffect(() => {
    setUserId(user?.id);
    setFormData({ ...formData, userid: userid });
  }, [user, userid]);

  function handleOnSubmit(event) {
    event.preventDefault();
    setFormData({ ...formData, userid: userid });
    Api.addExercise(formData);
    navigate("/exercise");
  }

  function handleForm(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  return (
    <div className="exerciseform-container">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="Date">Date MM/DD/YYYY:</label>
          <input type="date" id="date" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="duration">Duration in Hours:</label>
          <input type="duration" id="duration" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="type">Type:</label>
          <input type="type" id="type" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="rating">Rating:</label>
          <input type="text" id="rating" onChange={handleForm} />
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
