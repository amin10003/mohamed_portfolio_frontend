import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Hobbies: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const hobbies = [
    {
      icon: "⚽",
      title: "Football",
      desc: "Playing football with friends helps me stay active and build teamwork.",
    },
    {
      icon: "💻",
      title: "Coding Challenges",
      desc: "I enjoy solving problems on LeetCode and CodeWars to improve logical thinking.",
    },
    {
      icon: "📖",
      title: "Reading Tech Blogs",
      desc: "Keeping up with the latest in JavaScript, React, and modern web technologies.",
    },
    {
      icon: "🎨",
      title: "UI Design Experiments",
      desc: "I love creating new UI layouts and experimenting with TailwindCSS.",
    },
  ];

  return (
    <section
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-blue-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-4xl mx-auto backdrop-blur-md rounded-3xl p-10 shadow-2xl border transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/40 border-gray-700 text-gray-200"
            : "bg-white/80 border-gray-300 text-gray-800"
        }`}
      >
        {/* Header */}
        <h1
          className={`text-4xl font-extrabold mb-8 text-center tracking-wide ${
            theme === "dark" ? "text-emerald-300" : "text-emerald-600"
          }`}
        >
          Hobbies
        </h1>

        {/* Hobbies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {hobbies.map((hobby, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-700/30 border-gray-700 hover:border-emerald-400 hover:shadow-emerald-500/20"
                  : "bg-gray-100/60 border-gray-300 hover:border-emerald-500 hover:shadow-emerald-500/20"
              }`}
            >
              <div className="text-3xl mb-3">{hobby.icon}</div>
              <h2
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                {hobby.title}
              </h2>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {hobby.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center mt-10 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          "Hobbies keep creativity alive — they’re the heartbeat behind my passion for code and design."
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
