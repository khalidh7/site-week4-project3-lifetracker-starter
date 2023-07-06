import React from "react";
import "./ExerciseGrid.css";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

export default function ExerciseGrid({ exercise }) {
  return (
    <div className="exercise-grid">
      {exercise && exercise.length > 0 ? (
        exercise.map((instance, idx) => {
          return <ExerciseCard key={idx} instance={instance} />;
        })
      ) : (
        <h1>No Exercises Logged</h1>
      )}
    </div>
  );
}
