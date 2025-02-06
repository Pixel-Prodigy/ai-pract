import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaSearch,
  FaFileAlt,
  FaUser,
  FaGlobe,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useContext } from "react";
import { Context } from "./Context";
import { Link } from "wouter";
export function NavBar() {
  const [animation, setAnimation] = useState({
    opacity: 0,
    translateY: -30,
  });
  const { toggleBox } = useContext(Context);
  useEffect(() => {
    setAnimation({
      opacity: 1,
      translateY: 0,
    });
  }, []);

  return (
    <div className="w-full flex justify-center bg-black shadow-lg mb-24">
      <div className="flex justify-around bg-white p-2 px-6 rounded-full gap-6 items-center h-full sm:gap-4 sm:px-4 sm:py-2">
        <Link to="/">
          <motion.div
            className="bg-black p-2 rounded-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: animation.opacity, y: animation.translateY }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHome className="text-orange-500 text-2xl" />
          </motion.div>
        </Link>
        <Link to="/search">
          <motion.div
            className="bg-black p-2 rounded-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: animation.opacity, y: animation.translateY }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaSearch className="text-orange-500 text-2xl" />
          </motion.div>
        </Link>
        <Link to="/main">
          <motion.div
            className="bg-black p-2 rounded-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: animation.opacity, y: animation.translateY }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaFileAlt className="text-orange-500 text-2xl" />
          </motion.div>
        </Link>
        <Link to="/translate">
          <motion.div
            className="bg-black p-2 rounded-full"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: animation.opacity, y: animation.translateY }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGlobe className="text-orange-500 text-2xl" />
          </motion.div>
        </Link>
        <motion.div
          onClick={toggleBox}
          className="bg-black p-2 cursor-pointer rounded-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: animation.opacity, y: animation.translateY }}
          whileHover={{ y: -10 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <FaUser className="text-orange-500 text-2xl" />
        </motion.div>
      </div>
    </div>
  );
}
