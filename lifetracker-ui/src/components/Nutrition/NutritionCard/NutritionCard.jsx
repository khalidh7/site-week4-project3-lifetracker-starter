import React from "react";
import "./NutritionCard.css";

export default function NutritionCard({ instance }) {
  const date = new Date(instance.date).toLocaleDateString();
  return (
    <div className="nutrition-card">
      <div className="nutrition-card-header">
        <h3>Food on {date}</h3>
      </div>
      <div className="nutrition-card-body">
        <p>ID: {instance.id}</p>
        <p>Meal Name: {instance.name}</p>
        <p>Calories: {instance.calories}</p>
        <p>Protein: {instance.protein}</p>
      </div>
    </div>
  );
}
