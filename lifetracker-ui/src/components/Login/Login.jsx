import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  
  
  function handleOnSubmit(){
    try{
      axios.post('http://localhost:5000/auth/login', {
        "email": email,
        "password": password
      })
    }catch(err){
      console.log(err);
    }
  }


  function handleOnChangeLoginEmail(email){
    setEmail(email);
  }

  function handleOnChangeLoginPassword(password){
    setPassword(password);
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
        <button type="submit" className="submit-button" onClick={handleOnSubmit()}>Login</button>
      </form>
    </div>
    );
}