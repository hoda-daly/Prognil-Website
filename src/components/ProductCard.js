import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductCard.css";

const ProductCard = ({ image, title, description, id }) => {
  return (
    <article className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" loading="lazy" />
      </div>
      <div className="product-content">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <Link
          to={`/products/${id}`}
          className="see-details"
          aria-label={`View details about ${title}`}
        >
          See Details
        </Link>
      </div>
    </article>
  );
};

export default ProductCard;
