import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/Logo3.png";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/services", label: "Our Services" },
  { path: "/products", label: "Our Products" },
  { path: "/contact", label: "Contact Us" },
];

const languages = [
  { value: "en", label: "🌐" },
  { value: "fr", label: "FR" },
  { value: "es", label: "ES" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link">
          <img src={logo} alt="Prognil Logo" className="logo" />
        </Link>

        <nav className={`nav ${isMenuOpen ? "show" : ""}`}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`nav-link ${
                    pathname === item.path ? "active" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-actions">
            <select className="language-selector">
              {languages.map((lang) => (
                <option key={lang.value} value={lang.value}>
                  {lang.label}
                </option>
              ))}
            </select>
            <Link
              to="/contact"
              className="cta-button"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </nav>

        <div className="desktop-actions">
          <select className="language-selector">
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <Link to="/contact" className="cta-button">
            Get Started
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
