import React from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Navbar: React.FC = () => {
  const location = useLocation();

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
    <nav className="flex items-center justify-between px-8 py-4 bg-white/80 dark:bg-gray-800/40 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <h1 className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-300 tracking-wide">
        MyPortfolio
      </h1>

      <div className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-base font-medium transition-colors duration-200 ${
              location.pathname === link.to
                ? "text-emerald-600 dark:text-emerald-300"
                : "text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400"
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