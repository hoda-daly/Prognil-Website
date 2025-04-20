import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/CoreValues.css";
import innovationIcon from "../assets/Innovation-Driven Excellence.gif";
import customerIcon from "../assets/Customer-Centric Approach.gif";
import ethicalIcon from "../assets/Ethical AI Practices.gif";
import collaborationIcon from "../assets/Collaboration-icon.png";
import learningIcon from "../assets/Commitment to Learning and Growth.gif";
import qualityIcon from "../assets/Quality and Reliability.gif";
import socialIcon from "../assets/Social Impact.gif";
import dataIcon from "../assets/Data Security and Integrity.gif";
import leftArrow from "../assets/Left-icon.png";
import rightArrow from "../assets/Right-button.png";

const CoreValues = () => {
  const values = [
    {
      icon: innovationIcon,
      title: "Innovation-Driven Excellence",
      description:
        "Commit to pushing the boundaries of AI technology to deliver cutting-edge solutions that address real-world challenges.",
    },
    {
      icon: customerIcon,
      title: "Customer-Centric Approach",
      description:
        "Design products and services with the customer's needs as the central focus, ensuring solutions are impactful and user-friendly.",
    },
    {
      icon: ethicalIcon,
      title: "Ethical AI Practices",
      description:
        "Develop AI technologies responsibly, prioritizing fairness, transparency, and privacy in all solutions.",
    },
    {
      icon: collaborationIcon,
      title: "Collaboration and Partnership",
      description:
        "Foster a culture of teamwork within the company and with external partners to amplify our collective expertise.",
    },
    {
      icon: learningIcon,
      title: "Learning and Growth",
      description:
        "Deliver high-quality, dependable solutions that consistently exceed client expectations",
    },
    {
      icon: qualityIcon,
      title: "Quality and Reliability",
      description:
        "Create AI solutions that contribute positively to society, addressing challenges such as accessibility, sustainability, and efficiency",
    },
    {
      icon: socialIcon,
      title: "Social Impact",
      description:
        "Uphold the highest standards in safeguarding customer data and maintaining transparency in data usage",
    },
    {
      icon: dataIcon,
      title: "Data Security and Integrity",
      description:
        "Uphold the highest standards in safeguarding customer data and maintaining transparency in data usage",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <img src={leftArrow} alt="Previous" className="custom-prev-arrow" />
    ),
    nextArrow: (
      <img src={rightArrow} alt="Next" className="custom-next-arrow" />
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="core-values">
      <h2>Core Values</h2>
      <div className="value-grid">
        <Slider {...settings}>
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <img src={value.icon} alt={value.title} className="value-icon" />
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CoreValues;
