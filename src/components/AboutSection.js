
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AboutSection.css";
import aboutUsIllustration from "../assets/about-us-illustration.gif";
import phoneIcon from "../assets/Phone-icon.png";

const AboutSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="about-us">
      <div className={`about-us-content ${animate ? "animate-from-left" : ""}`}>
        <h2>ABOUT US</h2>
        <p>
          Welcome every one 👋! We are PROGNIL. We specialize in developing
          cutting-edge websites and applications using advanced technologies
          like AI. Our focus is on delivering high-quality digital products with
          the latest designs and technical advancements. By leveraging
          innovative solutions, we ensure rapid development and deployment,
          allowing our clients to obtain top-tier digital solutions in record
          time. Join us on the forefront of digital innovation and experience
          the power of technology to transform your business.
        </p>
        <Link to="/faq">
          <button className="faq-btn">FAQ</button>
        </Link>
      </div>
      <div className={`about-us-image ${animate ? "animate-from-right" : ""}`}>
        <img src={aboutUsIllustration} alt="About Us Illustration" />
      </div>
      <div className={`about-us-bottom ${animate ? "animate-from-left" : ""}`}>
        <p>We are here to help you get your best digital solution</p>
        <img src={phoneIcon} alt="Phone Icon" className="phone-icon" />
      </div>
    </section>
  );
};

export default AboutSection;
