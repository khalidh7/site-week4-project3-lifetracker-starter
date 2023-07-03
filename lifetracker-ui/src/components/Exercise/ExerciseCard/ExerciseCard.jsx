import React from "react";
import "./ExerciseCard.css";

export default function ExerciseCard({ instance }) {
    const date = new Date(instance.date).toLocaleDateString();
    return (
        <div className="exercise-card">
            <div className="exercise-card-header">
                <h3>Exercise on {date}</h3>
            </div>
            <div className="exercise-card-body">
                <p>Hours: {instance.duration}</p>
                <p>Type: {instance.type}</p>
                <p>Rating: {instance.rating}</p>  
            </div>
        </div>
    );
}