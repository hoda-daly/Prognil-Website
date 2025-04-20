import React from "react";
import { useNavigate } from "react-router-dom";
import errorImage from "../assets/404.png";
import "../styles/ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">Oops...</h1>
        <h1 className="error-title">Page not found</h1>
        <p className="error-description">
          Sorry, we can’t find the page you’re looking for. Let’s help you get
          back on track!
        </p>
        <button className="go-back-button" onClick={() => navigate(-1)}>
          Go back
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
