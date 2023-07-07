import React from "react";
import "./ActivityPage.css";
import { useState, useEffect } from "react";
import Api from "../../utilities/api";

export default function ActivityPage({ user }) {
  const [stats, setStats] = useState({});
  useEffect(() => {
    async function getStats() {
      const response = await Api.stats({ userid: user.id });
      setStats(response);
    }
    getStats();
    console.log(stats);
  }, [user]);

  return (
    <>
      {user ? (
        <div className="logged">
          <h1>Welcome {user?.firstname}</h1>
          <h2>Total Hours Exercises: {stats.totale ? stats.totale : 0}</h2>
          <h2>
            Average Calories Consumed: {stats.avgc ? stats.avgc.toFixed(1) : 0}
          </h2>
          <h2>Average Hours Slept: {stats.avgs ? stats.avgs.toFixed(1) : 0}</h2>
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
