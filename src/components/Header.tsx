import React from "react";
import { NavLink } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-8 flex justify-between items-center">
      <div className="text-2xl font-bold">My Portfolio</div>
      <nav className="space-x-4">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Profile
        </NavLink>
         <NavLink
          to="/cv"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          CV
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Projects
        </NavLink>
        
        <NavLink
          to="/achievements"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Achievements
        </NavLink>
        <NavLink
          to="/hobbies"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Hobbies
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "underline font-semibold" : "hover:underline"
          }
        >
          Blog
        </NavLink>
       
      </nav>
    </header>
  );
};

export default Header;
