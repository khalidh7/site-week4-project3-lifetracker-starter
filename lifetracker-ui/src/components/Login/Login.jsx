import React from "react";
import "./Login.css";
import { useState, useEffect } from "react";
import Api from "../../utilities/api";
import { useNavigate } from "react-router-dom";

export default function Login({ token, userGlobal, setToken, setUserGlobal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({ email: email, password: password });
  const [name, setName] = useState();
  const navigate = useNavigate();

  function handleOnSubmit(event) {
    event.preventDefault();
    Api.login(user).then((response) => {
      localStorage.setItem("jwt", response.token);
      setToken(response.token);
    });
    Api.user({ token: localStorage.getItem("jwt") }).then((response) => {
      setUserGlobal(response);
      setName(response.firstname + " " + response.lastname);
    });
    navigate("/activity");
  }

  function handleOnChangeLoginEmail(email) {
    setEmail(email);
    setUser({ email: email, password: password });
  }

  function handleOnChangeLoginPassword(password) {
    setPassword(password);
    setUser({ email: email, password: password });
  }
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="form">
        <div className="form-group">
          <label className="email-login" htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            onChange={(event) => {
              handleOnChangeLoginEmail(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label className="password-login" htmlFor="password">
            Password:
          </label>
          <input
            type="password"
            id="password"
            onChange={(event) => {
              handleOnChangeLoginPassword(event.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="submit-button"
          onClick={(event) => {
            handleOnSubmit(event);
          }}
        >
          Login
        </button>
      </form>
      {name?.length > 0 ? <h1>Hello {name}</h1> : null}
    </div>
  );
}

//when logged in, move to different page and update all components including navbar
