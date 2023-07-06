import React from "react";
import "./ActivityPage.css";
import { Button } from "@mui/material";

export default function ActivityPage({ user }) {
  return (
    <div>
      <h1>Welcome {user?.firstname}</h1>
      <Button href="/exercise">Exercise</Button>
    </div>
  );
}
