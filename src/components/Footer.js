import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "../styles/Footer.css";
import logo from "../assets/footer-logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
          <img src={logo} alt="Company Logo" />
        </div>

        <div className="email-social-row">
          <p className="email">Info@prognil.com</p>
          <div className="social-icons">
            <a
              href="https://www.linkedin.com/company/prognil/"
              className="icon"
            >
              <FaLinkedin />
            </a>
            <a href="#" className="icon">
              <FaTwitter />
            </a>
            <a
              href="https://www.facebook.com/share/1AHTR4imNh/"
              className="icon"
            >
              <FaFacebook />
            </a>
            <a href="#" className="icon">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="divider"></div>

        <div className="bottom-row">
          <p className="copyright">PROGNIL © 2024. All rights reserved.</p>

          <div className="footer-links">
            <a href="#">FAQ</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Sales and Refunds</a>
            <a href="#">Legal</a>
            <a href="#">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
