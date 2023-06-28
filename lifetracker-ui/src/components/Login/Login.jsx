import React from "react";
import "./Login.css";

export default function Login() {

  function handleOnSubmit(){
    // let email = document.getElementById("email").value;
    // let password = document.getElementById("password").value;
    // console.log(email);
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
          />
        </div>
        <div className="form-group">
          <label className="password-login" htmlFor="password">Password:</label>
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