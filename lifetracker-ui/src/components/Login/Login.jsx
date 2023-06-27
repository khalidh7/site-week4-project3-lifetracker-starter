import React from "react";
import "./Login.css";

export default function Login() {
    return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit" className="submit-button">Login</button>
      </form>
    </div>
    );
}