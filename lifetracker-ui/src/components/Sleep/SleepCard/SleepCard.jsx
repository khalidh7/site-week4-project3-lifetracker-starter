import React from "react";
import "./SleepCard.css";

export default function SleepCard({ instance }) {
  const date = new Date(instance.date).toLocaleDateString();

  return (
    <div className="sleep-card">
      <div className="sleep-card-header">
        <h3>Sleep on {date}</h3>
      </div>
      <div className="sleep-card-body">
        <p>Hours: {instance.duration}</p>
        <p>Start: {instance.starttime}</p>
        <p>End: {instance.endtime}</p>
      </div>
    </div>
  );
}
