import React from "react";
import "./SleepGrid.css";
import SleepCard from "../SleepCard/SleepCard";

export default function SleepGrid({ sleep }) {
    return (
        <div className="sleep-grid">
            {sleep && sleep.length > 0 ? sleep.map((instance, idx) => {return (<SleepCard key={idx} instance={instance}/>)}): 
            <h2>No sleep to display</h2>}
        </div>
    );
}