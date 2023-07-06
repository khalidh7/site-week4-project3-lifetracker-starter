import React from "react";
import "./NutritionGrid.css";
import NutritionCard from "../NutritionCard/NutritionCard";

export default function NutritionGrid({ nutrition }) {
  return (
    <div className="nutrition-grid">
      {nutrition && nutrition.length > 0 ? (
        nutrition.map((instance, idx) => {
          return <NutritionCard key={idx} instance={instance} />;
        })
      ) : (
        <h1>No Meals Logged</h1>
      )}
    </div>
  );
}
