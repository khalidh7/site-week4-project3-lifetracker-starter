import React from "react";
import "./ActivityPage.css";
import { useState, useEffect } from "react";

export default function ActivityPage({ user }) {
  const [stats, setStats] = useState({});
  useEffect(() => {
    async function getStats() {
      const response = await Api.stats(user.id);
      setStats(response);
    }
    getStats();
  }, [user]);

  return (
    <>
      {user ? (
        <div className="logged">
          <h1>Welcome {user?.firstname}</h1>
          <h2>Total Hours Exercises: {stats.totalE ? stats.totalE : 0}</h2>
          <h2>Average Calories Consumed: {stats.avgC ? stats.avgC : 0}</h2>
          <h2>Average Hours Slept: {stats.avgS ? stats.avgS : 0}</h2>
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
