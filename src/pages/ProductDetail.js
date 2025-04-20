import React from "react";
import { useParams, Link } from "react-router-dom";

import pulseupImage from "../assets/Pulsup.png";
import emc2Image from "../assets/product-emc-image.png";
import "../styles/ProductDetail.css";
import lightbulb from "../assets/lightbulb 1.png";
import setting from "../assets/settings 1-icon.png";

const products = {
  pulseup: {
    image: pulseupImage,
    title: "PULSEUP",
    overview:
      "PULSEUP is a mobile application designed to revolutionize physical therapy by providing users with tools to track their progress, communicate seamlessly with their doctors, and achieve optimal therapy results. With UI/UX design, we enhance the overall patient experience.",
    features:
      "In this step we begin with user journey from sign-up and login to progress tracking, schedules and communicate with doctor and every thing user need during his journey.",
  },
  emc2: {
    image: emc2Image,
    title: "EMC²",
    overview:
      "EMC² is a point system to engage users in community activities, securely facilitate donations, and enhance interactions between charities and their audience.",
    features:
      "Track community engagement, manage donations, and connect charities with supporters.",
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const product = products[productId] || {};

  if (!product.title) return <div>Product not found</div>;

  return (
    <div className="product-detail-page">
      {/* <Header /> */}
      <section className="product-detail">
        <h2>{product.title}</h2>
        <div className="product-detail-content">
          <div className="product-detail-text">
            <div className="product-overview">
              <h3>
                <img className="icon" src={lightbulb} alt="lightbulb" />
                Project Overview
              </h3>
              <p>{product.overview}</p>
            </div>
            <div className="product-features">
              <h3>
                <img src={setting} className="icon" />
                Features and Implementation
              </h3>
              <p>{product.features}</p>
            </div>
          </div>
          <div className="product-detail-image">
            <img src={product.image} alt={product.title} />
          </div>
        </div>
        <Link to="/products" className="back-btn">
          Back To Products
        </Link>
      </section>
    </div>
  );
};

export default ProductDetail;
