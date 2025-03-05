import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  { name: "New Delhi, India", link: "https://www.google.com/maps?q=New+Delhi,India" },
  { name: "Mumbai, India", link: "https://www.google.com/maps?q=Mumbai,India" },
  { name: "Bangalore, India", link: "https://www.google.com/maps?q=Bangalore,India" },
  { name: "Kolkata, India", link: "https://www.google.com/maps?q=Kolkata,India" },
];

const MapComponent = () => {
  return (
    <section className="flex flex-col md:flex-row mt-20 items-center justify-center gap-6 p-6 bg-gray-100 rounded-lg shadow-lg">
      {/* Left Side - Map */}
      <div className="w-full md:w-1/2">
        <iframe
          title="Google Map"
          className="w-full h-[300px] md:h-[400px] rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.2436235439834!2d76.93812857678846!3d28.38458158251548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3dc1ae67e541%3A0x911f4560c763fb4a!2sVatika%20India%20Market%20Place%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1692009081572!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Right Side - Location Info */}
      <div className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">Our Location</h2>
        <ul className="space-y-3">
          {locations.map((location, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-red-500" />
              <a
                href={location.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-600 font-medium"
              >
                {location.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MapComponent;
