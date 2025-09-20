import React from "react";

const Acheivements: React.FC = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6">Achievements</h1>
    <ul className="space-y-4 text-gray-700">
      <li className="p-4 bg-white rounded-lg shadow-md">
        🏆 Completed **100+ hours of JavaScript practice** and built several portfolio-ready projects.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        🥇 Winner — **Local Hackathon (UI/UX Category)** for designing an accessible web app.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        🚀 Published an **open-source React UI component library** with 500+ downloads.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        📜 Earned certifications in **React, TypeScript, and TailwindCSS**.
      </li>
    </ul>
  </section>
);

export default Acheivements;
