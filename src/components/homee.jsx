import React, { useState } from "react";
import arc from "../assets/arc.mp4"; // Background video
import { motion, AnimatePresence } from "framer-motion"; // Animations
import { 
  FiSearch, FiMenu, FiX, FiChevronDown, 
  FiPlus, FiShoppingBag, FiTrendingUp, FiUsers, FiMap, FiBriefcase, FiUserCheck 
} from "react-icons/fi"; // Icons

const optionsList = {
  "New Launches": ["Luxury Villas", "Apartments", "Beachfront Homes", "Penthouse Suites"],
  "Latest Handovers": ["Jebel Ali Towers", "Palm Residences", "Skyline Villas", "Harbour Bay"],
  "Construction": ["Phase 1 Complete", "Roads Underway", "New Bridges", "Green Spaces"],
  "Development": ["Upcoming Projects", "Community Plans", "Smart City Tech", "Sustainable Living"],
};

const HomePage = () => {
  const [hoveredButton, setHoveredButton] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false); // Search box state

  // Dropdown states for search field buttons
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [propertyOpen, setPropertyOpen] = useState(false);

  // Selected values for dropdowns
  const [selectedBudget, setSelectedBudget] = useState("Budget");
  const [selectedProperty, setSelectedProperty] = useState("Property Type");

  // Options for dropdowns
  const budgetOptions = ["0", "1 Lakh", "5 Lakh", "10 Lakh", "20 Lakh", "30 Crore"];
  const propertyOptions = ["Apartment", "Villa", "Studio", "Penthouse", "Loft"];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover z-0" autoPlay loop muted playsInline>
        <source src={arc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Blur Overlay */}
      {(hoveredButton || menuOpen || searchOpen) && (
        <div className="absolute inset-0 bg-black/30 backdrop-blur-lg transition-all duration-300 z-10"></div>
      )}

      {/* Header */}
      <header className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center justify-between w-full px-6">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold">NAKHEEL</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex space-x-6 relative">
          {Object.keys(optionsList).map((menuItem, index) => (
            <div
              className="relative"
              key={index}
              onMouseEnter={() => setHoveredButton(menuItem)}
              onMouseLeave={() => setHoveredButton(null)}
            >
              <button className="px-4 py-2 text-white text-lg font-bold rounded-lg transition-all hover:underline">
                {menuItem}
              </button>
              <AnimatePresence>
                {hoveredButton === menuItem && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-x-0 bg-white text-black rounded-lg shadow-lg mt-2 p-4 z-30"
                  >
                    <ul className="text-sm space-y-2 text-center">
                      {optionsList[menuItem].map((option, idx) => (
                        <li key={idx} className="px-3 py-2 hover:bg-gray-200 rounded-lg flex justify-center">
                          {option}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Search & Mobile Menu */}
        <div className="flex items-center space-x-6">
          <FiSearch
            className="text-white text-xl sm:text-2xl cursor-pointer mr-4"
            onClick={() => setSearchOpen(true)}
          />
          <button className="text-white text-2xl sm:hidden focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
            <FiMenu />
          </button>
        </div>
      </header>

      {/* Search Box Modal */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex justify-center items-center z-50"
          >
            <div className="bg-transparent-300 p-6 rounded-lg shadow-xl w-full max-w-6xl relative">
              {/* Close Button */}
              <button
                className="absolute top-2 right-2 text-2xl text-gray-700 hover:text-black"
                onClick={() => setSearchOpen(false)}
              >
                <FiX />
              </button>

              {/* White Box with Icon Buttons */}
              <div className="bg-white rounded-md shadow-md w-[60%] px-6 py-4 -mt-25 mx-auto">
                <div className="flex justify-around items-center">
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiPlus size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">New Projects</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiShoppingBag size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">Buy Properties</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiTrendingUp size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">Rent Properties</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiUsers size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">PG / Hostels</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiMap size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">Plot & Land</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiBriefcase size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">Commercial Properties</span>
                  </div>
                  <div className="flex flex-col items-center cursor-pointer">
                    <FiUserCheck size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">Find Agents</span>
                  </div>
                </div>
              </div>

              {/* Search Field with Dropdown Buttons */}
              <div className="flex items-center mt-4 ml-28">
                <div className="flex items-center border rounded-lg bg-white relative w-full sm:w-[800px]">
                  {/* Search Input */}
                  <input
                    type="text"
                    placeholder="Enter location or keyword"
                    className="w-full p-2 outline-none bg-transparent"
                  />

                  {/* Separator */}
                  <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>

                  {/* Budget Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setBudgetOpen(true)}
                    onMouseLeave={() => setBudgetOpen(false)}
                  >
                    <button className="px-4 py-2 hover:bg-gray-300 bg-transparent whitespace-nowrap flex items-center">
                      {selectedBudget} <FiChevronDown className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {budgetOpen && (
                        <motion.div
                          onMouseEnter={() => setBudgetOpen(true)}
                          onMouseLeave={() => setBudgetOpen(false)}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-50"
                        >
                          <ul className="text-sm">
                            {budgetOptions.map((option, idx) => (
                              <li
                                key={idx}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setSelectedBudget(option);
                                  setBudgetOpen(false);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Separator */}
                  <div className="h-6 w-[1px] bg-gray-400 mx-2"></div>

                  {/* Property Type Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setPropertyOpen(true)}
                    onMouseLeave={() => setPropertyOpen(false)}
                  >
                    <button className="px-4 py-2 hover:bg-gray-300 bg-transparent whitespace-nowrap flex items-center">
                      {selectedProperty} <FiChevronDown className="ml-1" />
                    </button>
                    <AnimatePresence>
                      {propertyOpen && (
                        <motion.div
                          onMouseEnter={() => setPropertyOpen(true)}
                          onMouseLeave={() => setPropertyOpen(false)}
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -5 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 w-full bg-white shadow-lg rounded-md mt-1 z-50"
                        >
                          <ul className="text-sm">
                            {propertyOptions.map((option, idx) => (
                              <li
                                key={idx}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                  setSelectedProperty(option);
                                  setPropertyOpen(false);
                                }}
                              >
                                {option}
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* Search Icon Button (Outside the Search Field) */}
                <button className="ml-4 bg-green-600 whitespace-nowrap text-white p-3 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                  <FiSearch size={24} />
                  <span className="text-sm">Search</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 right-0 w-screen h-full bg-gray-900 text-white z-50 p-6 shadow-lg backdrop-blur-lg"
          >
            <button className="absolute top-4 right-4 text-3xl focus:outline-none" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>
            <nav className="mt-12 space-y-6 text-lg">
              {Object.keys(optionsList).map((menuItem, index) => (
                <div key={index}>
                  <button
                    className="w-full text-left px-4 py-2 hover:bg-gray-700 rounded-lg focus:outline-none"
                    onClick={() => setSelectedMenu(selectedMenu === menuItem ? null : menuItem)}
                  >
                    {menuItem}
                  </button>
                  <AnimatePresence>
                    {selectedMenu === menuItem && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="pl-6 mt-2 space-y-2"
                      >
                        {optionsList[menuItem].map((option, idx) => (
                          <li key={idx} className="px-3 py-2 hover:bg-gray-600 rounded-lg">
                            {option}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full text-white py-4 text-center bg-black bg-opacity-75 z-20">
        <div className="flex flex-col sm:flex-row justify-around items-center px-6">
          <p className="text-sm sm:text-base">© 2025 Nakheel. All Rights Reserved.</p>
          <div className="flex space-x-4 text-sm sm:text-base">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Contact Us</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
  