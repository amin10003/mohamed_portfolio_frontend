import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const CV: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <section
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-blue-50 text-gray-800"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto shadow-2xl rounded-2xl p-10 border backdrop-blur-sm transition-all duration-300 ${
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
            Curriculum Vitae
          </h1>
          <p
            className={`text-lg italic mb-4 ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Mohamed Ibrahim Yusuf — Frontend Developer
          </p>
          <a
            href="/Mohamed_Ibrahim_Yusuf_CV.pdf"
            download
            className={`px-6 py-2 rounded-lg border transition duration-300 ${
              theme === "dark"
                ? "border-emerald-400 text-emerald-300 hover:bg-emerald-500/20"
                : "border-emerald-500 text-emerald-600 hover:bg-emerald-500/10"
            }`}
          >
            Download CV
          </a>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-3 border-b pb-2 ${
              theme === "dark"
                ? "text-emerald-300 border-emerald-500/30"
                : "text-emerald-600 border-emerald-500/30"
            }`}
          >
            Profile Summary
          </h2>
          <p
            className={`leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Passionate Frontend Developer specializing in creating modern,
            responsive, and user-friendly web applications using React,
            TypeScript, and Tailwind CSS. I aim to craft seamless digital
            experiences with clean code and elegant design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-3 border-b pb-2 ${
              theme === "dark"
                ? "text-emerald-300 border-emerald-500/30"
                : "text-emerald-600 border-emerald-500/30"
            }`}
          >
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {[
              "HTML5",
              "CSS3",
              "Tailwind CSS",
              "JavaScript (ES6+)",
              "React.js",
              "TypeScript",
              "Git & GitHub",
              "Linux",
            ].map((skill, index) => (
              <li
                key={index}
                className={`p-2 rounded-lg text-center transition ${
                  theme === "dark"
                    ? "bg-gray-700/40 hover:bg-gray-700/70 text-gray-300"
                    : "bg-gray-100/60 hover:bg-gray-200/70 text-gray-700"
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-3 border-b pb-2 ${
              theme === "dark"
                ? "text-emerald-300 border-emerald-500/30"
                : "text-emerald-600 border-emerald-500/30"
            }`}
          >
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-bold text-lg">Mandera Secondary School</h3>
              <p className="text-sm italic">Kenya — High School Education</p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Graduated: 2022
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Self-Taught Developer</h3>
              <p className="text-sm italic">
                Specialized in Frontend Development — HTML, CSS, JavaScript,
                React, and Tailwind
              </p>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                2023 - Present
              </p>
            </div>
          </div>
        </div>

        {/* Projects & Experience Section */}
        <div className="mb-8">
          <h2
            className={`text-2xl font-semibold mb-3 border-b pb-2 ${
              theme === "dark"
                ? "text-emerald-300 border-emerald-500/30"
                : "text-emerald-600 border-emerald-500/30"
            }`}
          >
            Projects & Experience
          </h2>
          <div className="space-y-4">
            <div
              className={`p-4 rounded-lg transition ${
                theme === "dark"
                  ? "bg-gray-700/30 hover:bg-gray-700/50"
                  : "bg-gray-100/60 hover:bg-gray-200/50"
              }`}
            >
              <h3
                className={`font-semibold text-lg ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                Portfolio Website
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Built a responsive portfolio using React, TypeScript, and
                Tailwind CSS to showcase personal projects and skills.
              </p>
            </div>

            <div
              className={`p-4 rounded-lg transition ${
                theme === "dark"
                  ? "bg-gray-700/30 hover:bg-gray-700/50"
                  : "bg-gray-100/60 hover:bg-gray-200/50"
              }`}
            >
              <h3
                className={`font-semibold text-lg ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                Task Manager App
              </h3>
              <p
                className={`text-sm ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Developed a simple React app to manage daily tasks with
                filtering, CRUD functionality, and local storage.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div
          className={`text-center border-t pt-6 mt-6 ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-2 ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Contact
          </h2>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            📧 Email:{" "}
            <a
              href="mailto:mohamedibrahimyusuf@example.com"
              className={`hover:underline ${
                theme === "dark" ? "text-emerald-400" : "text-emerald-500"
              }`}
            >
              mohamedibrahimyusuf@example.com
            </a>
          </p>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            🌍 Location:{" "}
            <span
              className={
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }
            >
              Nairobi, Kenya
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CV;
