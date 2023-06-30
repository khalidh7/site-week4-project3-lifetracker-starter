import React from "react";
import "./Signup.css";
import { useState } from "react";
import Api from "../../utilities/api";

export default function Signup() {
    let [email, setEmail] = useState("");
    let [username, setUsername] = useState("");
    let [firstname, setfirstname] = useState("");
    let [lastname, setlastname] = useState("");
    let [password, setPassword] = useState("");
    let [confirm, setConfirm] = useState("");
    let [user, setUser] = useState({email: email, username: username, firstname: firstname, lastname: lastname, password: password});

    function handleOnSubmit(event){
      if(verifyPassword(password, confirm)){
        Api.register(user);
      }
      // window.location.href = "/excerciseDashbo"; 
    }

    function handleValueChange(value, setValue){
      setValue(value);
      setUser({email: email, username: username, firstname: firstname, lastname: lastname, password: password});
    }

    function verifyPassword(password, confirm){
      if(password === confirm){
        return true;
      }
    }

    return (
    <div className="Signup-container">
      <h1>Sign Up</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            onChange={(event)=>{handleValueChange(event.target.value, setEmail)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="username"
            onChange={(event)=>{handleValueChange(event.target.value, setUsername)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="firstname"
            id="firstname"
            onChange={(event)=>{handleValueChange(event.target.value, setfirstname)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="lastname"
            id="lastname"
            onChange={(event)=>{handleValueChange(event.target.value, setlastname)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            onChange={(event)=>{handleValueChange(event.target.value, setPassword)}}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm">Confirm Password:</label>
          <input
            type="confirm"
            id="confirm"
            onChange={(event)=>{handleValueChange(event.target.value, setConfirm)}}
          />
        </div>
        <button type="submit" className="submit-button" onClick={(event)=>handleOnSubmit(event)}>Sign Up</button>
      </form>
    </div>
    );
}