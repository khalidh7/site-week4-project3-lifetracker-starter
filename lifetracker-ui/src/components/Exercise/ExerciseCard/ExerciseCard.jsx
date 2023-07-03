import React from "react";
import "./ExerciseCard.css";

export default function ExerciseCard({ instance }) {
    return (
        <div className="exercise-card">
            <div className="exercise-card-header">
                <h3>Exercise on {instance.date}</h3>
            </div>
            <div className="exercise-card-body">
                <p>Hours: {instance.hours}</p>
                <p>Type: {instance.type}</p>
                <p>Rating: {instance.rating}</p>  
            </div>
        </div>
    );
}