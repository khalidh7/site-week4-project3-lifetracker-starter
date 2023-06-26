import React from "react";
import "./Navbar.css";
import logo from "./logo.png";

export default function Navbar() {
    return(
        <div class="Navbar">
            <div class="activity-links">
                <a class="logo" href="/">
                    <img className="logo-img" src={logo} alt="logo"/>
                </a>
                <a class="activity-link" href="/activity">Activity</a>
                <a class="activity-link" href="/exercise">Exercise</a>
                <a class="activity-link" href="/nutrition">Nutrition</a>
                <a class="activity-link" href="/sleep">Sleep</a>
            </div>
            <div class="account-links">
                <a class="sign-in-button" href="/login">
                    <button type="button" class="chakra-button css-1t9i4zo">Sign In</button>
                </a>
                <a class="sign-up-button" href="/register">
                    <button type="button" class="chakra-button css-td8gbm">Register</button>
                </a>
            </div>
        </div>
    )
}