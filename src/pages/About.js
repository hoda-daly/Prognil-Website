import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";

import "../styles/About.css";

const About = () => {
  return (
    <div className="about-page">
      <Header />
      <AboutSection />
    </div>
  );
};

export default About;
