import React from "react";
import Api from "../../../utilities/api";
import "./SleepPage.css";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import SleepGrid from "../SleepGrid/SleepGrid";

export default function SleepPage({ user }) {
  return (
    <>
      {user ? (
        <div>
          <h1>Welcome {user?.firstname}</h1>
          <h2>Sleep Tracking Coming Soon!</h2>
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
