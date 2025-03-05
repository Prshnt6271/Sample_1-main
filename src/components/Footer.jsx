import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full text-white py-4 text-center bg-black bg-opacity-75 z-20">
      <div className="flex flex-col sm:flex-row justify-around items-center px-6">
        <p className="text-sm sm:text-base">© 2025 Nakheel. All Rights Reserved.</p>
        <div className="flex space-x-4 text-sm sm:text-base">
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
          <Link to="/contact">
            <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
