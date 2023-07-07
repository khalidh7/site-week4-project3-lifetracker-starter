import React from "react";
import "./ActivityPage.css";

export default function ActivityPage({ user }) {
  return (
    <>
      {user ? (
        <div className="logged">
          <h1>Welcome {user?.firstname}</h1>
          <button
            href="/exercise"
            variant="contained"
            color="primary"
            className="actbutton"
          >
            View Exercise Entries
          </button>
          <button
            href="/nutrition"
            variant="contained"
            color="primary"
            className="actbutton"
          >
            View Meal Entries
          </button>
          <button
            href="/sleep"
            variant="contained"
            color="primary"
            className="actbutton"
          >
            View Sleep Entries
          </button>
        </div>
      ) : (
        <div className="notlogged">
          <h1>Welcome</h1>
          <h2>Please Login in to Access</h2>
          <button href="/login" variant="contained" color="primary">
            Login
          </button>
        </div>
      )}
    </>
  );
}
