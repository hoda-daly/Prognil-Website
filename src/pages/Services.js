import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import prevarr from "../assets/prev-arr.png";
import nextarr from "../assets/next-arr.png";
import "../styles/Services.css";

const Services = () => {
  const [services, setServices] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    setAnimate(true);
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    // Fetch services from API
    const fetchServices = async () => {
      try {
        const response = await fetch(
          'https://prognil.runasp.net/api/Services?page=1&NumberOfItems=12',
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
        setServices(data);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleTransitionEnd = () => setIsTransitioning(false);

  const handleNext = () => {
    if (isTransitioning || currentIndex >= services.length - 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isTransitioning || currentIndex <= 0) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e) => {
    if (!isMobile) return;
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (!isMobile) return;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isMobile || !touchStartX.current || !touchEndX.current) return;

    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (loading) {
    return (
      <div className="services-page">
        <Header />
        <div className="loading">Loading services...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="services-page">
        <Header />
        <div className="error">Error loading services: {error}</div>
      </div>
    );
  }

  if (services.length === 0) {
    return (
      <div className="services-page">
        <Header />
        <div className="no-services">No services available</div>
      </div>
    );
  }

  return (
    <div className="services-page">
      <Header />
      <section className="services">
        <h2 className="services-title animate-card">Our Services</h2>
        <div className="services-container">
          {!isMobile && (
            <button
              className="arrow arrow-left"
              onClick={handlePrev}
              disabled={isTransitioning || currentIndex === 0}
            >
              <img src={prevarr} alt="Previous" />
            </button>
          )}

          <div
            className="services-grid"
            ref={carouselRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${
                  currentIndex * (isMobile ? 100 : 100 / 3)
                }%)`,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  image={service.image}
                  title={service.title}
                  description={service.description}
                  isCurrent={index === currentIndex}
                  className={animate ? "animate-card" : ""}
                />
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              className="arrow arrow-right"
              onClick={handleNext}
              disabled={isTransitioning || currentIndex >= services.length - 1}
            >
              <img src={nextarr} alt="Next" />
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
// import React, { useState, useEffect, useRef } from "react";
// import Header from "../components/Header";
// import ServiceCard from "../components/ServiceCard";
// import dataImage from "../assets/data-analysis.png";
// import mobileImage from "../assets/mobil-app.png";
// import webImage from "../assets/web-design.png";
// import uiuxImage from "../assets/UI-UX.png";
// import aiImage from "../assets/AI-tools.png";
// import prevarr from "../assets/prev-arr.png";
// import nextarr from "../assets/next-arr.png";
// import "../styles/Services.css";

// const services = [
//   {
//     id: 1,
//     image: dataImage,
//     title: "Data Analytics",
//     description:
//       "Our software company offers comprehensive data analytics services, transforming data into actionable insights for informed decision-making and business growth.",
//   },
//   {
//     id: 2,
//     image: mobileImage,
//     title: "Mobile App Development",
//     description:
//       "We offer expert mobile app development, creating intuitive, secure, high-performing apps for iOS and Android.",
//   },
//   {
//     id: 3,
//     image: webImage,
//     title: "Web Design & Development",
//     description:
//       "We provide high-quality, responsive, and secure web development using the latest technologies.",
//   },
//   {
//     id: 4,
//     image: uiuxImage,
//     title: "UI/UX Consultancy",
//     description:
//       "Prognil offers expert UI/UX consultancy, creating intuitive, user-friendly, and visually appealing designs to enhance user experience.",
//   },
//   {
//     id: 5,
//     image: aiImage,
//     title: "AI Tools for Business",
//     description:
//       "We provide advanced AI tools for business, automating processes, gaining insights, and enabling data-driven decisions to enhance efficiency and growth.",
//   },
// ];

// const Services = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [animate, setAnimate] = useState(false);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const touchStartX = useRef(null);
//   const touchEndX = useRef(null);
//   const carouselRef = useRef(null);

//   useEffect(() => {
//     setAnimate(true);
//     const checkMobile = () => setIsMobile(window.innerWidth <= 768);
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const handleTransitionEnd = () => setIsTransitioning(false);

//   const handleNext = () => {
//     if (isTransitioning || currentIndex >= services.length - 1) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev + 1);
//   };

//   const handlePrev = () => {
//     if (isTransitioning || currentIndex <= 0) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev - 1);
//   };

//   const handleTouchStart = (e) => {
//     if (!isMobile) return;
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e) => {
//     if (!isMobile) return;
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (!isMobile || !touchStartX.current || !touchEndX.current) return;

//     const diff = touchStartX.current - touchEndX.current;
//     if (diff > 50) handleNext();
//     if (diff < -50) handlePrev();

//     touchStartX.current = null;
//     touchEndX.current = null;
//   };

//   return (
//     <div className="services-page">
//       <Header />
//       <section className="services">
//         <h2 className="services-title animate-card">Our Services</h2>
//         <div className="services-container">
//           {!isMobile && (
//             <button
//               className="arrow arrow-left"
//               onClick={handlePrev}
//               disabled={isTransitioning || currentIndex === 0}
//             >
//               <img src={prevarr} alt="Previous" />
//             </button>
//           )}

//           <div
//             className="services-grid"
//             ref={carouselRef}
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               className="carousel-track"
//               style={{
//                 transform: `translateX(-${
//                   currentIndex * (isMobile ? 100 : 100 / 3)
//                 }%)`,
//                 transition: isTransitioning
//                   ? "transform 0.5s ease-in-out"
//                   : "none",
//               }}
//               onTransitionEnd={handleTransitionEnd}
//             >
//               {services.map((service, index) => (
//                 <ServiceCard
//                   key={service.id}
//                   image={service.image}
//                   title={service.title}
//                   description={service.description}
//                   isCurrent={index === currentIndex}
//                   className={animate ? "animate-card" : ""}
//                 />
//               ))}
//             </div>
//           </div>

//           {!isMobile && (
//             <button
//               className="arrow arrow-right"
//               onClick={handleNext}
//               disabled={isTransitioning || currentIndex >= services.length - 1}
//             >
//               <img src={nextarr} alt="Next" />
//             </button>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Services;
