import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import usersApi from "../../services/usersApi";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState({email: email, password: password});
  
  
  function handleOnSubmit(event){
    event.preventDefault();
    usersApi.loginUser(user);
    window.location.href = "/excerciseDashbo";
  }


  function handleOnChangeLoginEmail(email){
    setEmail(email);
    setUser({email: email, password: password})
  }

  function handleOnChangeLoginPassword(password){
    setPassword(password);
    setUser({email: email, password: password})
  }
    return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="form">
        <div className="form-group">
          <label className="email-login" htmlFor="email" onChange={(event)=>{handleOnChangeLoginEmail(event.target.value)}}>Email:</label>
          <input
            type="email"
            id="email"
          />
        </div>
        <div className="form-group">
          <label className="password-login" htmlFor="password" onChange={(event)=>{handleOnChangeLoginPassword(event.target.value)}}>Password:</label>
          <input
            type="password"
            id="password"
          />
        </div>
        <button type="submit" className="submit-button" onClick={(event)=>{handleOnSubmit(event)}}>Login</button>
      </form>
    </div>
    );
}