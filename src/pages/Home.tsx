import React from "react";

const Home: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-700 dark:bg-gray-800/60 dark:border-gray-700 animate-fadeIn text-gray-200 dark:text-gray-200">
        <div className="flex flex-col items-center text-center">
          <img
            src="/profile.png"
            alt="Mohamed Ibrahim Yusuf"
            className="w-32 h-32 rounded-full border-4 border-emerald-400 dark:border-emerald-400 shadow-lg mb-4 object-cover"
          />
          <h1 className="text-4xl font-extrabold text-emerald-300 dark:text-emerald-300 mb-3 tracking-wide">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg text-gray-300 dark:text-gray-300 mb-6 leading-relaxed max-w-2xl">
            Hi 👋, I'm <span className="text-emerald-300 dark:text-emerald-300 font-semibold">Mohamed Ibrahim Yusuf</span>, a frontend developer passionate about building beautiful, responsive, and interactive web experiences.
          </p>
          <div className="text-left w-full sm:w-3/4 mt-6">
            <h2 className="text-2xl font-semibold text-emerald-400 dark:text-emerald-400 mb-3">
              Explore My Work
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300 dark:text-gray-300">
              <li><strong>Profile</strong> — Learn more about me</li>
              <li><strong>Projects</strong> — View my latest creations</li>
              <li><strong>Achievements</strong> — Key milestones & recognition</li>
              <li><strong>CV</strong> — My educational and professional journey</li>
              <li><strong>Blog</strong> — Insights, ideas, and reflections</li>
              <li><strong>Hobbies</strong> — What I do beyond coding</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;