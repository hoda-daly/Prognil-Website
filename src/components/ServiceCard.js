import React from "react";
import "../styles/ServiceCard.css";

const ServiceCard = ({ image, title, description, isCurrent, className }) => {
  return (
    <div
      className={`service-card ${isCurrent ? "current-card" : ""} ${className}`}
    >
      <div className="service-image-wrapper">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
