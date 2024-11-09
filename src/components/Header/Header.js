import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="login-div">
        <p className="login-text">Already have an account?</p>
        <button className="login-button">LOGIN</button>
      </div>

      <div className="title-div">
        <h1 className="title-text">Discover new things on Superapp</h1>
      </div>
    </div>
  );
};

export default Header;
