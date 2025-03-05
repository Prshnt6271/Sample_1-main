import React, { useState } from "react";
import { FiSearch, FiMenu } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import DropdownMenu from "./DropdownMenu";

const optionsList = {
  "New Launches": ["Luxury Villas", "Apartments", "Beachfront Homes", "Penthouse Suites"],
  "Latest Handovers": ["Jebel Ali Towers", "Palm Residences", "Skyline Villas", "Harbour Bay"],
  "Construction": ["Phase 1 Complete", "Roads Underway", "New Bridges", "Green Spaces"],
  "Development": ["Upcoming Projects", "Community Plans", "Smart City Tech", "Sustainable Living"],
};

const Header = ({ setSearchOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);

  return (
    <header className="absolute top-4 left-4 sm:top-6 sm:left-6 z-20 flex items-center justify-between w-full px-6">
      <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold">NAKHEEL</h1>

      {/* Desktop Menu */}
      <div className="hidden sm:flex space-x-6 relative">
        {Object.keys(optionsList).map((menuItem, index) => (
          <DropdownMenu key={index} title={menuItem} options={optionsList[menuItem]} />
        ))}
        
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6">
        <FiSearch className="text-white text-xl sm:text-2xl cursor-pointer" onClick={() => setSearchOpen(true)} />
        {/* Mobile Menu Button */}
        <button className="text-white text-2xl sm:hidden focus:outline-none" onClick={() => setMenuOpen(true)}>
          <FiMenu />
        </button>
      </div>

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
            {/* Close Button */}
            <button className="absolute top-4 right-4 text-3xl focus:outline-none" onClick={() => setMenuOpen(false)}>
              <FiX />
            </button>

            {/* Mobile Navigation */}
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
    </header>
  );
};

export default Header;
