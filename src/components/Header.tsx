import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Header: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <motion.header
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`flex flex-col items-center justify-center text-center py-20 px-6 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-gray-50 text-gray-800"
      }`}
    >
      {/* Profile Image */}
      <motion.img
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        src="/profile.png"
        alt="Mohamed Ibrahim Yusuf"
        className={`w-40 h-40 rounded-full shadow-lg mb-6 border-4 ${
          theme === "dark" ? "border-emerald-400" : "border-emerald-600"
        }`}
      />

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className={`text-4xl sm:text-5xl font-extrabold mb-2 ${
          theme === "dark" ? "text-emerald-300" : "text-emerald-600"
        }`}
      >
        Mohamed Ibrahim Yusuf
      </motion.h1>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className={`text-lg sm:text-xl mb-6 max-w-2xl ${
          theme === "dark" ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Frontend Developer passionate about crafting modern, responsive web
        experiences using React, TypeScript, and Tailwind CSS.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <Link
          to="/projects"
          className="px-6 py-2 rounded-lg flex items-center gap-2 transition bg-emerald-500 hover:bg-emerald-600 text-white"
        >
          View Projects <FaArrowRight />
        </Link>

        <a
          href="/Mohamed_Ibrahim_Yusuf_CV.pdf"
          download
          className={`px-6 py-2 border rounded-lg flex items-center gap-2 transition ${
            theme === "dark"
              ? "border-emerald-400 text-emerald-300 hover:bg-emerald-500/20"
              : "border-emerald-500 text-emerald-600 hover:bg-emerald-500/10"
          }`}
        >
          <FaFileDownload /> Download CV
        </a>
      </motion.div>
    </motion.header>
  );
};

export default Header;
