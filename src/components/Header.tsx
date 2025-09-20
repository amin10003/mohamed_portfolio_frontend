import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <nav className="space-x-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline hover:underline" : "hover:underline"
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline hover:underline" : "hover:underline"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/acheivements"
          className={({ isActive }) =>
            isActive ? "underline hover:underline" : "hover:underline"
          }
        >
          Achievements
        </NavLink>
        <NavLink
          to="/hobbies"
          className={({ isActive }) =>
            isActive ? "underline hover:underline" : "hover:underline"
          }
        >
          Hobbies
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "underline hover:underline" : "hover:underline"
          }
        >
          Blog
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
