import React, { useEffect, useState } from "react";
import "../styles/Loading.css";
import logo from "../assets/prognil-logo2.png";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loading">
      <img src={logo} alt="Prognil Logo" />
      <div className="progress-bar">
        <div className="progress"></div>
      </div>
      <p>
        Great things take a moment—PROGNIL is preparing to deliver innovative
        solutions tailored just for you. Hang tight, we’re almost there!
      </p>
    </div>
  );
};

export default Loading;
