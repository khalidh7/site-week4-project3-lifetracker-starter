import React from "react";
import "./NutritionPage.css";
import { Button } from "@mui/material";

export default function NutritionPage({ user }) {
  return (
    <>
      {user ? (
        <div>
          <h1>Welcome {user?.firstname}</h1>
          <h2>Nutrition Tracking Coming Soon!</h2>
        </div>
      ) : (
        <div className="notlogged">
          <h1>Welcome</h1>
          <h2>Please Login in to Access</h2>
          <Button href="/login" color="primary" variant="contained">
            Login
          </Button>
        </div>
      )}
    </>
  );
}
