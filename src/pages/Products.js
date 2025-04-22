import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [animate, setAnimate] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setAnimate(true);
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        'http://prognil.runasp.net/api/Products?page=1&NumberOfItems=12',
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    // If you want to implement actual filtering from the API:
    // fetchProducts(filter); // You would need to modify fetchProducts to accept filters
  };

  if (loading) {
    return (
      <div className="products-page">
        <Header />
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="products-page">
        <Header />
        <div className="error">Error loading products: {error}</div>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="products-page">
        <Header />
        <div className="no-products">No products available</div>
      </div>
    );
  }

  // Filter products client-side if needed
  const filteredProducts = activeFilter === "All"
    ? products
    : products.filter(product => product.category === activeFilter);

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
          {filteredProducts.map((product) => (
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

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import ProductCard from "../components/ProductCard";
// import "../styles/Products.css";

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [animate, setAnimate] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setAnimate(true);
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await fetch(
//         'http://prognil.runasp.net/api/Products?page=1&NumberOfItems=12',
//         {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//           }
//         }
//       );
      
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
      
//       const data = await response.json();
//       setProducts(data);
//     } catch (err) {
//       console.error("Error fetching products:", err);
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//     // If you want to implement actual filtering from the API:
//     // fetchProducts(filter); // You would need to modify fetchProducts to accept filters
//   };

//   if (loading) {
//     return (
//       <div className="products-page">
//         <Header />
//         <div className="loading">Loading products...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="products-page">
//         <Header />
//         <div className="error">Error loading products: {error}</div>
//       </div>
//     );
//   }

//   if (products.length === 0) {
//     return (
//       <div className="products-page">
//         <Header />
//         <div className="no-products">No products available</div>
//       </div>
//     );
//   }

//   // Filter products client-side if needed
//   const filteredProducts = activeFilter === "All" 
//     ? products 
//     : products.filter(product => product.category === activeFilter);

//   return (
//     <div className="products-page">
//       <Header />
//       <section className="products">
//         <h2 className={animate ? "animate-heading" : ""}>Our Products</h2>
//         <div className="filter-bar">
//           {[
//             "All",
//             "Web development",
//             "Mobile Application",
//             "UI/UX Projects",
//             "AI tools for business",
//             "Analytics",
//           ].map((filter) => (
//             <button
//               key={filter}
//               className={activeFilter === filter ? "active" : ""}
//               onClick={() => handleFilterClick(filter)}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//         <div className="products-grid">
//           {filteredProducts.map((product) => (
//             <div className={animate ? "animate-card" : ""} key={product.id}>
//               <ProductCard
//                 image={product.image}
//                 title={product.title}
//                 description={product.description}
//                 id={product.id}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;

// import React, { useState, useEffect } from "react";
// import Header from "../components/Header";
// import ProductCard from "../components/ProductCard";

// import pulseupImage from "../assets/Pulsup.png";
// import emc2Image from "../assets/product-emc-image.png";
// import "../styles/Products.css";

// const products = [
//   {
//     id: "pulseup",
//     image: pulseupImage,
//     title: "PULSEUP",
//     description:
//       "Physical therapy Application. You can track your progress, contact with your Doctor and get the best results",
//   },
//   {
//     id: "emc2",
//     image: emc2Image,
//     title: "EMC²",
//     description:
//       "A point system to engage users in community activities, securely facilitate donations, and enhance interactions between charities and their audience",
//   },
// ];

// const Products = () => {
//   const [animate, setAnimate] = useState(false);
//   const [activeFilter, setActiveFilter] = useState("All");

//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const handleFilterClick = (filter) => {
//     setActiveFilter(filter);
//   };

//   return (
//     <div className="products-page">
//       <Header />
//       <section className="products">
//         <h2 className={animate ? "animate-heading" : ""}>Our Products</h2>
//         <div className="filter-bar">
//           {[
//             "All",
//             "Web development",
//             "Mobile Application",
//             "UI/UX Projects",
//             "AI tools for business",
//             "Analytics",
//           ].map((filter) => (
//             <button
//               key={filter}
//               className={activeFilter === filter ? "active" : ""}
//               onClick={() => handleFilterClick(filter)}
//             >
//               {filter}
//             </button>
//           ))}
//         </div>
//         <div className="products-grid">
//           {products.map((product) => (
//             <div className={animate ? "animate-card" : ""} key={product.id}>
//               <ProductCard
//                 image={product.image}
//                 title={product.title}
//                 description={product.description}
//                 id={product.id}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Products;
