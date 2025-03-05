import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiPlus, FiShoppingBag, FiTrendingUp, FiUsers, FiMap, FiBriefcase, FiUserCheck, FiChevronDown, FiSearch } from "react-icons/fi";

const SearchModal = ({ searchOpen, setSearchOpen }) => {
  const [budgetOpen, setBudgetOpen] = useState(false);
    const [propertyOpen, setPropertyOpen] = useState(false);
  
    // Selected values for dropdowns
    const [selectedBudget, setSelectedBudget] = useState("Budget");
    const [selectedProperty, setSelectedProperty] = useState("Property Type");
  
  const budgetOptions = ["0", "1 Lakh", "5 Lakh", "10 Lakh", "20 Lakh", "30 Crore"];
  const propertyOptions = ["Apartment", "Villa", "Studio", "Penthouse", "Loft"];

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex justify-center items-center z-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-6xl relative">
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
                {[FiPlus, FiShoppingBag, FiTrendingUp, FiUsers, FiMap, FiBriefcase, FiUserCheck].map((Icon, index) => (
                  <div key={index} className="flex flex-col items-center cursor-pointer">
                    <Icon size={28} className="text-gray-700" />
                    <span className="text-xs text-gray-700">
                      {["New Projects", "Buy Properties", "Rent Properties", "PG / Hostels", "Plot & Land", "Commercial Properties", "Find Agents"][index]}
                    </span>
                  </div>
                ))}
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

              {/* Search Button */}
              <button className="ml-4 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <FiSearch size={24} />
                <span className="text-sm">Search</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
