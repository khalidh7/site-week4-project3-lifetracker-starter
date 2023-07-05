import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default function Navbar({ token, user, setToken, setUser }) {
  return (
    <div className="Navbar">
      <div className="activity-links">
        <a className="logo" href="/">
          <img className="logo-img" src={logo} alt="logo" />
        </a>
        <a className="activity-link" href="/activity">
          Activity
        </a>
        <a className="activity-link" href="/exercise">
          Exercise
        </a>
        <a className="activity-link" href="/nutrition">
          Nutrition
        </a>
        <a className="activity-link" href="/sleep">
          Sleep
        </a>
      </div>
      <div className="account-links">
        {!localStorage.getItem("token") ? (
          <div>
            <a className="sign-in-button" href="/login">
              <button type="button" className="chakra-button css-1t9i4zo">
                Sign In
              </button>
            </a>
            <a className="sign-up-button" href="/register">
              <button type="button" className="chakra-button css-td8gbm">
                Register
              </button>
            </a>
          </div>
        ) : (
          <a className="sign-in-button" href="/login">
            <button type="button" className="chakra-button css-1t9i4zo">
              Sign out
            </button>
          </a>
        )}
      </div>
    </div>
  );
}
