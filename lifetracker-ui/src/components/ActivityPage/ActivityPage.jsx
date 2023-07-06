import React from "react";
import "./ActivityPage.css";
import { Button } from "@mui/material";

export default function ActivityPage({ user }) {
  return (
    <>
      {user ? (
        <div className="logged">
          <h1>Welcome {user?.firstname}</h1>
          <Button href="/exercise" variant="contained" color="primary">
            View Exercise Entries
          </Button>
        </div>
      ) : (
        <div className="notlogged">
          <h1>Welcome</h1>
          <h2>Please Login in to Access</h2>
          <Button href="/login" variant="contained" color="primary">
            Login
          </Button>
        </div>
      )}
    </>
  );
}
