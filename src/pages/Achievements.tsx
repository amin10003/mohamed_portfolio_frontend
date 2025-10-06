import React from "react";

const Achievements: React.FC = () => (
  <section className="p-6 bg-gray-100 min-h-screen">
    <h1 className="text-3xl font-bold mb-6">Achievements</h1>
    <ul className="space-y-4 text-gray-700">
      <li className="p-4 bg-white rounded-lg shadow-md">
        🏆 Completed <strong>100+ hours of JavaScript practice</strong> and built several portfolio-ready projects.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        🥇 Winner — <strong>Local Hackathon (UI/UX Category)</strong> for designing an accessible web app.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        🚀 Published an <strong>open-source React UI component library</strong> with 500+ downloads.
      </li>
      <li className="p-4 bg-white rounded-lg shadow-md">
        📜 Earned certifications in <strong>React, TypeScript, and TailwindCSS</strong>.
      </li>
    </ul>
  </section>
);

export default Achievements;
