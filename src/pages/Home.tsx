import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";

const Home: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen p-8 flex items-center justify-center transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-blue-50 text-gray-800"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`w-full max-w-4xl mx-auto backdrop-blur-md rounded-3xl p-10 shadow-2xl border transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/40 border-gray-700 text-gray-200"
            : "bg-white/80 border-gray-300 text-gray-800"
        }`}
      >
        {/* Profile Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center text-center"
        >
          <img
            src="/profile.png"
            alt="Mohamed Ibrahim Yusuf"
            className={`w-32 h-32 rounded-full border-4 shadow-lg mb-5 object-cover ${
              theme === "dark" ? "border-emerald-400" : "border-emerald-600"
            }`}
          />

          {/* Heading */}
          <h1
            className={`text-4xl font-extrabold mb-3 tracking-wide ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Welcome to My Portfolio
          </h1>

          {/* Intro Text */}
          <p
            className={`text-lg mb-8 leading-relaxed max-w-2xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Hi 👋, I'm{" "}
            <span
              className={`${
                theme === "dark" ? "text-emerald-300" : "text-emerald-600"
              } font-semibold`}
            >
              Mohamed Ibrahim Yusuf
            </span>
            , a frontend developer passionate about building beautiful,
            responsive, and interactive web experiences.
          </p>
        </motion.div>

        {/* Explore Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-left w-full sm:w-3/4 mx-auto mt-4"
        >
          <h2
            className={`text-2xl font-semibold mb-3 ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          >
            Explore My Work
          </h2>
          <ul
            className={`list-disc list-inside space-y-2 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <li>
              <Link
                to="/profile"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>Profile</strong> — Learn more about me
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>Projects</strong> — View my latest creations
              </Link>
            </li>
            <li>
              <Link
                to="/achievements"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>Achievements</strong> — Key milestones & recognition
              </Link>
            </li>
            <li>
              <Link
                to="/cv"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>CV</strong> — My educational and professional journey
              </Link>
            </li>
            <li>
              <Link
                to="/blog"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>Blog</strong> — Insights, ideas, and reflections
              </Link>
            </li>
            <li>
              <Link
                to="/hobbies"
                className="hover:underline hover:text-emerald-500 transition"
              >
                <strong>Hobbies</strong> — What I do beyond coding
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Footer Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`text-center mt-10 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          “Every great developer begins with curiosity — and a passion for
          learning.”
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
