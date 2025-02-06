import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaSearch,
  FaBell,
  FaUser,
  FaCog,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

export function NavBar() {
  const [animation, setAnimation] = useState({
    opacity: 0,
    translateY: -30,
  });

  useEffect(() => {
    setAnimation({
      opacity: 1,
      translateY: 0,
    });
  }, []);

  return (
    <div className="w-full flex justify-center bg-black shadow-lg mb-24">
      <div className="flex justify-around bg-white p-2 px-6 rounded-full gap-6 items-center h-full  sm:gap-4 sm:px-4 sm:py-2">
        {[FaHome, FaSearch, FaBell, FaCog,  FaUser].map((Icon, index) => (
          <motion.div
            key={index}
            className="bg-black p-2 rounded-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: animation.opacity, y: animation.translateY }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="text-orange-500 text-2xl" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
