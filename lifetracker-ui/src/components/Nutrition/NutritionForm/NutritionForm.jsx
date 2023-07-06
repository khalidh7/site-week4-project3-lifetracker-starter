import React, { useEffect } from "react";
import "./NutritionForm.css";
import { useState } from "react";
import Api from "../../../utilities/api";
import { useNavigate } from "react-router-dom";

export default function NutritionForm({ user }) {
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
    Api.addNutrition(formData);
    navigate("/nutrition");
  }

  function handleForm(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  return (
    <div className="nutritionform-container">
      <h1>Add Meal Entry</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="Date">Date MM/DD/YYYY:</label>
          <input type="date" id="date" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="name">Meal Name:</label>
          <input type="name" id="name" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="calories">Calories:</label>
          <input type="calories" id="calories" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="protein">Protein:</label>
          <input type="protein" id="protein" onChange={handleForm} />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={(event) => handleOnSubmit(event)}
        >
          Add Meal
        </button>
      </form>
    </div>
  );
}
