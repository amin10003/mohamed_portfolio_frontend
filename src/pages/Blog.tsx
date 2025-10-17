import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Blog: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const posts = [
    {
      title: "How I Built My Portfolio with React & Tailwind",
      link: "#",
      desc: "A step-by-step guide on setting up my portfolio using React, TypeScript, and TailwindCSS.",
    },
    {
      title: "TailwindCSS Tips for Beginners",
      link: "#",
      desc: "Top strategies for using Tailwind effectively — from responsive design to custom themes and reusable utilities.",
    },
    {
      title: "React Router Made Simple",
      link: "#",
      desc: "Breaking down React Router in a beginner-friendly way with real project-based examples.",
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
        className={`w-full max-w-5xl mx-auto shadow-2xl rounded-3xl p-10 border backdrop-blur-md transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/40 border-gray-700 text-gray-200"
            : "bg-white/80 border-gray-300 text-gray-800"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h1
            className={`text-4xl font-extrabold mb-2 tracking-wide ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Blog
          </h1>
          <p
            className={`text-lg italic ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Thoughts, tutorials, and lessons from my frontend development journey
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid sm:grid-cols-2 gap-8">
          {posts.map((post, idx) => (
            <article
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-300 hover:scale-105 shadow-lg ${
                theme === "dark"
                  ? "bg-gray-700/30 border-gray-700 hover:border-emerald-400"
                  : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
              }`}
            >
              <h2
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                {post.title}
              </h2>
              <p
                className={`mb-3 text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {post.desc}
              </p>
              <a
                href={post.link}
                className={`text-sm font-medium hover:underline transition-colors duration-300 ${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                }`}
              >
                Read more →
              </a>
            </article>
          ))}
        </div>

        {/* Footer Note */}
        <div
          className={`text-center mt-12 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          "Every line of code tells a story — these blogs are mine."
        </div>
      </div>
    </section>
  );
};

export default Blog;
