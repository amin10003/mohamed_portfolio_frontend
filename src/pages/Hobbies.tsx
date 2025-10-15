import React from "react";

const Hobbies: React.FC = () => (
  <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
    <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-700 animate-fadeIn text-gray-200">
      <h1 className="text-4xl font-extrabold text-emerald-300 mb-8 text-center tracking-wide">
        Hobbies
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
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
        ].map((hobby, idx) => (
          <div
            key={idx}
            className="bg-gray-700/50 p-6 rounded-2xl border border-gray-700 hover:border-emerald-400 hover:shadow-emerald-500/20 transition duration-300"
          >
            <div className="text-3xl mb-2">{hobby.icon}</div>
            <h2 className="text-xl font-semibold text-emerald-400 mb-2">
              {hobby.title}
            </h2>
            <p className="text-gray-300">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hobbies;
