import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "./pages/Home";
import ContactUs from "./components/ContactUs"; // Import ContactUs page
import Footer from "./components/Footer"; // Import Footer component

export default function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} /> Contact Us route
      </Routes>
  {/* Conditionally render the footer */}
  {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}
