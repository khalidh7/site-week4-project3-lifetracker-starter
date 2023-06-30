import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import Api from "../../utilities/api";


export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState({email: email, password: password});
  
  
  function handleOnSubmit(event){
    event.preventDefault();
    Api.login(user);
    // window.location.href = "/excerciseDashbo";
  }


  function handleOnChangeLoginEmail(email){
    setEmail(email);
    setUser({email: email, password: password})
    console.log(user)
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
          <label className="email-login" htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(event)=>{handleOnChangeLoginEmail(event.target.value)}}
          />
        </div>
        <div className="form-group">
          <label className="password-login" htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(event)=>{handleOnChangeLoginPassword(event.target.value)}}
          />
        </div>
        <button type="submit" className="submit-button" onClick={(event)=>{handleOnSubmit(event)}}>Login</button>
      </form>
    </div>
    );
}