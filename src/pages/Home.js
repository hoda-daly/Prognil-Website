import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoreValues from "../components/CoreValues";
import FAQSection from "../components/FAQSection";
import Footer from "../components/Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HeroSection />
      <AboutSection />
      <CoreValues />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Home;
