import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-full transition-all duration-300 focus:outline-none ${
        theme === "dark"
          ? "bg-gray-700 text-yellow-400 hover:bg-gray-600"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300"
      }`}
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeToggle;
