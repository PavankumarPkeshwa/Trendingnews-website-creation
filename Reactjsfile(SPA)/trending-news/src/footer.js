import React from "react";
import "./App.css"; // Ensure styles are properly linked

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h1 className="logo-text">
            <span>Trending</span>News
          </h1>
          <p>
            Welcome to the Trending News website. We provide you the latest news 
            and updates on various topics. We hope you find our website helpful and 
            informative. Thank you for visiting our website.
          </p>
          <div className="contact">
            <span>
              <i className="bx bx-phone-call"></i>&nbsp;0987654321
            </span>
            <span>
              <i className="bx bxs-envelope"></i>&nbsp;pavankumarp@gmail.com
            </span>
          </div>
          <div className="social">
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
            <a href="#"><i className="bx bxl-facebook-circle"></i></a>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
          </ul>
        </div>
        <div className="footer-section contact-form">
          <h2>Contact Us</h2>
          <form action="index.html" method="post">
            <input 
              type="text" 
              name="email" 
              className="text-input content-input" 
              placeholder="Enter your email address..."
            />
            <textarea 
              name="message" 
              className="text-input content-input" 
              placeholder="Your Message..."
            ></textarea>
            <button type="submit" className="btn btn-big contact-btn">
              <i className="bx bxs-envelope"></i> Send
            </button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; pavanKumarp.in.net | Designed by Pavan Kumar P
      </div>
    </div>
  );
};

export default Footer;
