import React from "react";
import "./Home.css";

export default function Home() {
    return (
        <div className="Home">
            <div className="home-header">
                <h1 className="home-title">LifeTracker</h1>
                <h2 className="home-subtitle">Track your life, one day at a time.</h2>
            </div>
            <div className="home-body">
                <div className="home-body-left">
                    <h3 className="home-body-title">What is LifeTracker?</h3>
                    <p className="home-body-text">LifeTracker is a web application that allows you to track your daily activities, such as exercise, nutrition, and sleep. You can also view your activity history and see how you've been doing over time.</p>
                </div>
                <div className="home-body-right">
                    <h3 className="home-body-title">How do I get started?</h3>
                    <p className="home-body-text">To get started, you'll need to create an account. Once you've created an account, you can start tracking your activities. You can also view your activity history and see how you've been doing over time.</p>
                </div>
            </div>
        </div>
    )
}