import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./styles/global.css";
import Loading from "./components/Loading";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Loading />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Loading from "./components/Loading"; // Import the Loading component
// import "./styles/global.css";

// // Lazy load all page components
// const Home = lazy(() => import("./pages/Home"));
// const About = lazy(() => import("./pages/About"));
// const Services = lazy(() => import("./pages/Services"));
// const Products = lazy(() => import("./pages/Products"));
// const ProductDetail = lazy(() => import("./pages/ProductDetail"));
// const Contact = lazy(() => import("./pages/Contact"));
// const NotFound = lazy(() => import("./pages/NotFound"));

// const App = () => {
//   return (
//     <Router>
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="/products" element={<Products />} />
//           <Route path="/products/:productId" element={<ProductDetail />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;
