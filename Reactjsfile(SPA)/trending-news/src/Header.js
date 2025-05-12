import React from "react";
import "./App.css"; // Make sure you have your CSS file

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1 className="logo-text">
          <span>Trending</span>News
        </h1>
      </div>
      <i className="bx bx-menu"></i>
      <ul className="nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#tech">Technology</a></li>
        <li><a href="#fit">Fitness</a></li>
        <li><a href="#travel">Travel</a></li>
        <li><a href="#invest">Investing</a></li>
        <li><a href="#life">Lifestyle</a></li>
        <li><a href="#motive">Motivation</a></li>
        <li><a href="#sport">Sports</a></li>
        <li><a href="register.html">
          <i className="bx bx-user-circle"></i>Signup
        </a></li>
      </ul>
    </header>
  );
};

export default Header;
