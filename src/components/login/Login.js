import React from "react";
import "./login.css";
import icon from "../../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button/Button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <img src={icon} alt="logo" />
        <div className="welcome">
          <h3>Hi There!</h3>
          <h3>Welcome back.</h3>
        </div>
        <form className="login-form">
          <div className="form-fields-container">
            <div className="form-field">
              <FontAwesomeIcon icon="user" />
              <input type="text" placeholder="username or email" />
            </div>
            <div className="form-field">
              <FontAwesomeIcon icon="lock" />
              <input type="password" placeholder="password" />
            </div>
          </div>
          <Button type="submit" name="Login" submit primary />
        </form>
        <div className="division">
          <hr />
          <p>Or</p>
          <hr />
        </div>
        <div className="form-field" style={{border:"1px solid #0071bd"}}>
          <FontAwesomeIcon icon={["fab", "google"]} />
          <input type="submit" style={{backgroundColor:"transparent"}}value="Login with google" />
        </div>
        <h3 className="sign-up-option">Don't have an account? <Link className="sign-up" to="/register">Sign up</Link></h3>
      </div>
    </div>
  );
};

export default Login;
