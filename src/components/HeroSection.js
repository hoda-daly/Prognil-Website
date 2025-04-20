import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/HeroSection.css";

const heroContent = [
  {
    id: 1,
    image: require("../assets/hero-image.png"),
    title: "The Right Place to Expand Your Business",
    subtitle: "Innovative Software Solutions for a Digital World",
    alt: "Business meeting",
  },
  {
    id: 2,
    image: require("../assets/hero-image2.png"),
    title: "Cutting-Edge Technology Solutions",
    subtitle: "Transforming businesses with digital innovation",
    alt: "Team collaboration",
  },
  {
    id: 3,
    image: require("../assets/hero-image3.png"),
    title: "Your Growth Partners",
    subtitle: "Custom solutions for your business challenges",
    alt: "Digital solutions",
  },
  {
    id: 4,
    image: require("../assets/hero-image4.png"),
    title: "Future-Ready Platforms",
    subtitle: "Building the digital infrastructure of tomorrow",
    alt: "Innovative technology",
  },
];

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: false,
    fade: true,
    cssEase: "linear",
  };

  return (
    <section className="hero">
      <Slider {...settings} className="hero-slider">
        {heroContent.map((slide) => (
          <div key={slide.id} className="hero-slide">
            <div className="slide-container">
              <img
                src={slide.image}
                alt={slide.alt}
                className="hero-image"
                loading="lazy"
              />
              <div className="slide-content">
                <h1 className="hero-title">{slide.title}</h1>
                <p className="hero-subtitle">{slide.subtitle}</p>
                <div className="hero-actions">
                  <Link to="/about" className="hero-btn primary">
                    About Us
                  </Link>
                  <Link to="/contact" className="hero-btn secondary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSection;
