import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const location = useLocation();
  const { theme } = useContext(ThemeContext);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "/projects", label: "Projects" },
    { to: "/achievements", label: "Achievements" },
    { to: "/cv", label: "CV" },
    { to: "/blog", label: "Blog" },
    { to: "/hobbies", label: "Hobbies" },
  ];

  return (
    <nav
      className={`flex items-center justify-between px-8 py-4 border-b transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-950 border-gray-700 text-gray-200"
          : "bg-gray-50 border-gray-200 text-gray-900"
      }`}
    >
      <h1
        className={`text-2xl font-extrabold tracking-wide ${
          theme === "dark" ? "text-emerald-300" : "text-emerald-600"
        }`}
      >
        MyPortfolio
      </h1>

      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base font-medium transition-colors duration-200 ${
              location.pathname === link.to
                ? theme === "dark"
                  ? "text-emerald-300"
                  : "text-emerald-600"
                : theme === "dark"
                ? "text-gray-300 hover:text-emerald-400"
                : "text-gray-600 hover:text-emerald-500"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
