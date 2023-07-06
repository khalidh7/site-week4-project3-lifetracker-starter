import React, { useEffect } from "react";
import "./SleepForm.css";
import { useState } from "react";
import Api from "../../../utilities/api";
import { useNavigate } from "react-router-dom";

export default function SleepForm({ user }) {
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
    Api.addSleep(formData);
    navigate("/exercise");
  }

  function handleForm(e) {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  return (
    <div className="sleepform-container">
      <h1>Add Exercise Entry</h1>
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
          <label htmlFor="starttime">Start time:</label>
          <input type="starttime" id="starttime" onChange={handleForm} />
        </div>
        <div className="form-group">
          <label htmlFor="endtime">End time:</label>
          <input type="endtime" id="endtime" onChange={handleForm} />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={(event) => handleOnSubmit(event)}
        >
          Add Sleep
        </button>
      </form>
    </div>
  );
}
