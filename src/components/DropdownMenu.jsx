import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = ({ title, options }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="relative" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <button className="px-4 py-2 text-white text-lg font-bold rounded-lg transition-all hover:underline">
        {title}
      </button>
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 bg-white text-black rounded-lg shadow-lg mt-2 p-4 z-30"
          >
            <ul className="text-sm space-y-2 text-center">
              {options.map((option, idx) => (
                <li key={idx} className="px-3 py-2 hover:bg-gray-200 rounded-lg flex justify-center">
                  {option}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
    
  );
};

export default DropdownMenu;