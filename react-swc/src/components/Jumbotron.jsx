// Paper.jsx
import React from "react";
import "./Paper.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Paper = () => {
  return (
    <div className="paper-banner">
      <div className="paper-content">
        <div className="logo-and-title">
          <img src={logo} alt="Logo" className="logo" />
          <h1 className="title">EngX 2023</h1>
        </div>
        <p className="description">
          Join us for EngX 2023, an exciting conference where experts from
          diverse fields come together to share insights, innovations, and
          ideas.
        </p>
        <Link className="cta-button" to="/about">
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default Paper;
