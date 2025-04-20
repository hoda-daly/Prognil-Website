import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

import pulseupImage from "../assets/Pulsup.png";
import emc2Image from "../assets/product-emc-image.png";
import "../styles/Products.css";

const products = [
  {
    id: "pulseup",
    image: pulseupImage,
    title: "PULSEUP",
    description:
      "Physical therapy Application. You can track your progress, contact with your Doctor and get the best results",
  },
  {
    id: "emc2",
    image: emc2Image,
    title: "EMC²",
    description:
      "A point system to engage users in community activities, securely facilitate donations, and enhance interactions between charities and their audience",
  },
];

const Products = () => {
  const [animate, setAnimate] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  useEffect(() => {
    setAnimate(true);
  }, []);

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="products-page">
      <Header />
      <section className="products">
        <h2 className={animate ? "animate-heading" : ""}>Our Products</h2>
        <div className="filter-bar">
          {[
            "All",
            "Web development",
            "Mobile Application",
            "UI/UX Projects",
            "AI tools for business",
            "Analytics",
          ].map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => handleFilterClick(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="products-grid">
          {products.map((product) => (
            <div className={animate ? "animate-card" : ""} key={product.id}>
              <ProductCard
                image={product.image}
                title={product.title}
                description={product.description}
                id={product.id}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
