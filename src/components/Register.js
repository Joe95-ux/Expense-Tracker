import React from "react";
import icon from "../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "./button/Button";
import { Link } from "react-router-dom";
import "./login/login.css";

const Register = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={icon} alt="logo" />
        <div className="welcome">
          <h3>Hi There!</h3>
          <h3>Create an account.</h3>
        </div>
        <form className="login-form">
          <div className="form-fields-container">
            <div className="form-field">
              <FontAwesomeIcon icon="user" />
              <input type="text" placeholder="username" />
            </div>
            <div className="form-field">
              <FontAwesomeIcon icon="envelope-square" />
              <input type="text" placeholder="email" />
            </div>
            <div className="form-field">
              <FontAwesomeIcon icon="lock" />
              <input type="password" placeholder="password" />
            </div>
          </div>
          <Button type="submit" name="Create an Account" submit primary />
        </form>
        
        <h3 className="sign-up-option">
          Already have an account?{" "}
          <Link className="sign-up" to="/login">
            Sign in
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Register;
