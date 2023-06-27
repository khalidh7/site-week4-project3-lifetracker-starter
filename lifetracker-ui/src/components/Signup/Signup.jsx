import React from "react";
import "./Signup.css";

export default function Signup() {
    return (
    <div className="Signup-container">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Full Name:</label>
          <input
            type="name"
            id="name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="confirm"
            id="confirm"
          />
        </div>
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </div>
    );
}