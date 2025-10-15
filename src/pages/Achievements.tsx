import React from "react";
import { FaAward, FaTrophy, FaStar } from "react-icons/fa";

const Achievements: React.FC = () => {
  const achievements = [
    {
      icon: <FaAward className="text-emerald-400 text-3xl mb-2" />,
      title: "Frontend Development Mastery",
      description:
        "Completed full learning path from HTML, CSS, Git, GitHub, and Linux to JavaScript and React with Tailwind CSS.",
      year: "2024",
    },
    {
      icon: <FaTrophy className="text-emerald-400 text-3xl mb-2" />,
      title: "Portfolio Website Launch",
      description:
        "Designed and developed a personal portfolio showcasing projects, profile, and CV using React + TypeScript.",
      year: "2025",
    },
    {
      icon: <FaStar className="text-emerald-400 text-3xl mb-2" />,
      title: "Community Recognition",
      description:
        "Recognized by peers for consistency, clean design, and strong dedication to learning modern frontend tools.",
      year: "2025",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-10">
      <div className="max-w-5xl mx-auto bg-gray-800/40 shadow-2xl rounded-2xl p-10 border border-gray-700 backdrop-blur-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-emerald-300 mb-2 tracking-wide">
            Achievements
          </h1>
          <p className="text-gray-200 text-lg italic">
            Milestones that mark my growth and dedication as a Frontend Developer
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="bg-gray-700/30 p-6 rounded-xl shadow-lg text-center border border-gray-700 hover:scale-105 hover:border-emerald-400 transition-transform duration-300"
            >
              {ach.icon}
              <h2 className="text-xl font-semibold text-emerald-300 mb-1">
                {ach.title}
              </h2>
              <p className="text-gray-200 text-sm mb-2">{ach.description}</p>
              <p className="text-gray-400 text-xs italic">{ach.year}</p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12 text-gray-400 text-sm border-t border-gray-700 pt-4">
          “Every achievement is a step closer to mastering the art of code and design.”
        </div>
      </div>
    </section>
  );
};

export default Achievements;
