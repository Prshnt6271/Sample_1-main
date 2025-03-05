import React from "react";
import Header from "./Header";
import contactus from "../assets/contactus.jpg"; // Ensure correct extension
import tt from "../assets/tt.jpg"; // Ensure correct extension
import { FaSearch, FaPlus } from "react-icons/fa"; // Import icons
import ContactForm from "./ContactForm"
import MapComponent from "./MapComponent";

const buttonData = [
  { name: "Property", color: "rgba(189, 158, 112, 0.8)", border: "rgba(189, 158, 112, 1)" },
  { name: "Nakheel Communities", color: "rgba(34, 124, 157, 0.8)", border: "rgba(34, 124, 157, 1)" },
  { name: "Leasing", color: "rgba(102, 187, 106, 0.8)", border: "rgba(102, 187, 106, 1)" }
];

const ContactUs = () => {
  return (
    <div>
      {/* Image container with Header overlay */}
      <div className="relative w-full h-1/2">
        {/* Header positioned at the top of the image */}
        <div className="absolute top-0 left-0 w-full z-10">
          <Header />
        </div>

        {/* Full-width image, half-screen height */}
        <img
          src={contactus}
          alt="Contact"
          className="w-full h-full object-cover backdrop-blur-none"
          
        />

        {/* "Contact Us" text positioned below "Nakheel" */}
        <div className="absolute bottom-[6rem] left-[15%] transform -translate-x-1/3 text-white text-5xl font-bold z-20">
          Contact Us
        </div>
      </div>

      {/* New Text Section Below Image */}
      <div className="text-center mt-6 px-4">
        <h2 className="text-3xl font-bold">How can we help you?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Search our extensive frequently asked questions
        </p>

        {/* Search Box (Wider & Centered) */}
        <div className="flex justify-center mt-6 px-6">
          <div className="relative w-full max-w-2xl">
            <input
              type="text"
              placeholder="Search FAQs..."
              className="w-full py-4 pl-12 pr-4 text-gray-700 border-2 border-blue-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>
        </div>

        {/* Browse FAQs Text (Below Search Box) */}
        <p className="mt-3 text-blue-600 font-semibold text-lg cursor-pointer hover:underline">
          Browse Frequently Asked Questions
        </p>

        {/* Three Buttons Below FAQs with Different Colors */}
        <div className="mt-6 space-y-4 px-6">
          {buttonData.map((item, index) => (
            <button
              key={index}
              className="w-full flex justify-between items-center py-4 px-6 rounded-lg text-lg font-semibold text-white"
              style={{
                backgroundColor: item.color, // Unique color per button
                border: `1px solid ${item.border}` // Matching border
              }}
            >
              <span className="text-left">{item.name}</span>
              <FaPlus className="text-white" />
            </button>
          ))}
        </div>

        {/* Additional Text Below Last Button */}
        <p className="mt-6 text-center text-gray-700 text-lg px-4">
          Has the provided information been sufficient to address your query, or would you prefer assistance from our <span className="font-semibold text-blue-600">Nakheel Customer Care</span> team?
        </p>

        {/* Customer Care Button */}
        <div className="mt-4">
          <button className="bg-sky-500 text-white px-6 py-3 -lg text-lg font-semibold hover:bg-sky-600 transition duration-200">
           CONTACT CUSTOMER CARE 
          </button>
        </div>

        {/* Horizontal Line (Same Width as Button) */}
        <div className="mt-9 mx-auto w- h-[2px]  space-y-4 px-6 bg-gray-700"></div>
      </div>

      <ContactForm/>

      <MapComponent/>

        
    </div>
  );
};

export default ContactUs;
