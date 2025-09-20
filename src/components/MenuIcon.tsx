// src/components/MenuIcon.tsx
import React from "react";

const MenuIcon: React.FC<{ open?: boolean }> = ({ open = false }) => (
  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    {open ? (
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    ) : (
      <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    )}
  </svg>
);

export default MenuIcon;

