import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full border border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 
                 hover:bg-emerald-500/20 transition duration-300"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? (
        <FaSun className="text-yellow-400" size={18} />
      ) : (
        <FaMoon className="text-gray-700" size={18} />
      )}
    </button>
  );
};

export default ThemeToggle;