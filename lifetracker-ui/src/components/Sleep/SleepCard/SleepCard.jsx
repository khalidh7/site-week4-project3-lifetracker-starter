import React from "react";
import "./SleepCard.css";

export default function SleepCard({ instance }) {
    return (
        <div className="sleep-card">
            <div className="sleep-card-header">
                <h3>Sleep on {instance.date}</h3>
            </div>
            <div className="sleep-card-body">
                <p>Hours: {instance.hours}</p>
                <p>Start: {new Date(instance.starttime).toLocaleTimeString()}</p>
                <p>End: {new Date(instance.endtime).toLocaleTimeString}</p>  
            </div>
        </div>
    );
}