import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaGithub, FaExternalLinkAlt, FaLaptopCode } from "react-icons/fa";

const Projects: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A modern personal portfolio built with React, TypeScript, and TailwindCSS featuring multiple pages, dark/light mode, and API integration.",
      image: "/projects/portfolio.png",
      demo: "#",
      code: "#",
      tech: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      title: "Task Manager App",
      description:
        "A responsive task management web app with CRUD functionality, using React Query and a Node.js + Express backend.",
      image: "/projects/taskapp.png",
      demo: "#",
      code: "#",
      tech: ["React", "Express", "MongoDB"],
    },
    {
      title: "Weather Dashboard",
      description:
        "Weather forecast dashboard fetching live data from OpenWeather API with dynamic background themes.",
      image: "/projects/weather.png",
      demo: "#",
      code: "#",
      tech: ["JavaScript", "API", "TailwindCSS"],
    },
    {
      title: "School Admission Form",
      description:
        "Interactive and colorful admission form for Mandera Secondary School with form validation and Tailwind CSS layout.",
      image: "/projects/admission.png",
      demo: "#",
      code: "#",
      tech: ["HTML", "TailwindCSS", "JavaScript"],
    },
  ];

  return (
    <section
      className={`min-h-screen flex items-center justify-center p-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-6xl backdrop-blur-md rounded-3xl p-10 shadow-2xl border transition-all duration-500 ${
          theme === "dark"
            ? "bg-gray-800/60 border-gray-700"
            : "bg-white/80 border-gray-300"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <FaLaptopCode
            className={`mx-auto text-5xl mb-4 ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          />
          <h1
            className={`text-4xl font-extrabold mb-2 tracking-wide ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Projects
          </h1>
          <p
            className={`italic text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A collection of my featured works that blend creativity and clean
            code.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden shadow-lg border transform hover:scale-105 transition duration-300 ${
                theme === "dark"
                  ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
                  : "bg-gray-100/70 border-gray-300 hover:border-emerald-500"
              }`}
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2
                  className={`text-xl font-bold mb-2 ${
                    theme === "dark" ? "text-emerald-300" : "text-emerald-700"
                  }`}
                >
                  {project.title}
                </h2>
                <p
                  className={`text-sm mb-3 leading-relaxed ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-xs rounded-full font-medium ${
                        theme === "dark"
                          ? "bg-emerald-900/40 text-emerald-300"
                          : "bg-emerald-100 text-emerald-700"
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition ${
                      theme === "dark"
                        ? "text-emerald-400 hover:text-emerald-300"
                        : "text-emerald-700 hover:text-emerald-600"
                    }`}
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2 text-sm font-medium transition ${
                      theme === "dark"
                        ? "text-gray-300 hover:text-emerald-400"
                        : "text-gray-700 hover:text-emerald-600"
                    }`}
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div
          className={`text-center mt-12 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          “Each project is a new challenge — a step forward in mastering both
          logic and aesthetics.”
        </div>
      </div>
    </section>
  );
};

export default Projects;
