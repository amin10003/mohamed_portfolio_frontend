// src/components/NavItem.tsx
import React from "react";
import { NavLink } from "react-router-dom";

const NavItem: React.FC<{ to: string; label: string; onClick?: () => void }> = ({ to, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `px-3 py-2 rounded-md transition-colors text-sm font-medium ${
        isActive ? "bg-slate-800 text-white" : "text-slate-700 hover:bg-slate-100"
      }`
    }
  >
    {label}
  </NavLink>
);

export default NavItem;

