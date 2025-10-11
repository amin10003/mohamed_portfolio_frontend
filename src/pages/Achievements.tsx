import React from "react";

const Achievements: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 rounded-2xl">
      <div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-700 animate-fadeIn">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="profile.png" // 🏆 You can replace with any icon/image
            alt="Achievements Icon"
            className="w-36 h-36 rounded-full object-cover border-4 border-emerald-400 shadow-lg mb-4 transform hover:scale-105 transition duration-500"
          />
          <h1 className="text-4xl font-extrabold text-emerald-300 font-sans tracking-wide drop-shadow-md">
            Achievements
          </h1>
          <p className="text-gray-300 mt-3 text-lg italic leading-relaxed">
            Highlights of my journey and milestones that shaped my career.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="space-y-6">
          <div className="bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300 hover:scale-[1.02]">
            🏆 Completed{" "}
            <strong className="text-emerald-300">
              100+ hours of JavaScript practice
            </strong>{" "}
            and built several portfolio-ready projects.
          </div>

          <div className="bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300 hover:scale-[1.02]">
            🥇 Winner —{" "}
            <strong className="text-emerald-300">
              Local Hackathon (UI/UX Category)
            </strong>{" "}
            for designing an accessible web app.
          </div>

          <div className="bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300 hover:scale-[1.02]">
            🚀 Published an{" "}
            <strong className="text-emerald-300">
              open-source React UI component library
            </strong>{" "}
            with 500+ downloads.
          </div>

          <div className="bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300 hover:scale-[1.02]">
            📜 Earned certifications in{" "}
            <strong className="text-emerald-300">
              React, TypeScript, and TailwindCSS
            </strong>
            .
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
