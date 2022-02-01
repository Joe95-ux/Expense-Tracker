import React from "react";
import icon from "../../images/icon.png";
import cover from "../../images/cover.png";
import { Link } from "react-router-dom";
import "./home.css";
import Button from "../button/Button";
const Home = () => {
  return (
    <div className="wrapper">
      <div className="wrapperInner">
        <div className="landing">
          <div className="landingInner">
            <img src={icon} alt="address-icon" />
            <h2>Manage All your Income and Expenses from one place</h2>
            <p>
              With this app, you will be able to keep track of your income and
              expenses. You will never spend beyond your budget again.
            </p>
            <hr className="hr" />
            <Link to="/login">
              <Button name="Get Started" />
            </Link>
          </div>
        </div>
        <div className="cover">
          <img src={cover} alt="cover" />
        </div>
      </div>
    </div>
  );
};

export default Home;
