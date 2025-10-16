import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaFileDownload } from "react-icons/fa";

const Header: React.FC = () => {
  return (
    <header className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      {/* Profile Image */}
      <img
        src="/profile.jpg" // replace with your actual image path
        alt="Mohamed Ibrahim Yusuf"
        className="w-40 h-40 rounded-full shadow-lg mb-6 border-4 border-emerald-500"
      />

      {/* Title & Subtitle */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-emerald-500 mb-2">
        Mohamed Ibrahim Yusuf
      </h1>
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl">
        Frontend Developer passionate about crafting modern, responsive web
        experiences using React, TypeScript, and Tailwind CSS.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          to="/projects"
          className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg flex items-center gap-2 transition"
        >
          View Projects <FaArrowRight />
        </Link>

        <a
          href="/Mohamed_Ibrahim_Yusuf_CV.pdf"
          download
          className="px-6 py-2 border border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white rounded-lg flex items-center gap-2 transition"
        >
          <FaFileDownload /> Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
