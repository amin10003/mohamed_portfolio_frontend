import React from "react";

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React, TypeScript, and TailwindCSS showcasing my skills and projects.",
      demo: "#",
      code: "#",
    },
    {
      title: "Task Manager App",
      description:
        "A full-stack MERN application for managing daily tasks with authentication and responsive UI.",
      demo: "#",
      code: "#",
    },
    {
      title: "E-commerce Store",
      description:
        "An online shop built with React and Redux, including product filters, cart functionality, and checkout flow.",
      demo: "#",
      code: "#",
    },
    {
      title: "Blog Platform",
      description:
        "A blogging platform built with Next.js, Markdown support, and dynamic routing.",
      demo: "#",
      code: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8">
      <div className="w-full max-w-5xl bg-gray-800/60 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-700 animate-fadeIn text-gray-200">
        <div className="text-center mb-10">
          <img
            src="/profile.png"
            alt="Projects"
            className="w-32 h-32 rounded-full border-4 border-emerald-400 shadow-lg mx-auto mb-4 object-cover"
          />
          <h1 className="text-4xl font-extrabold text-emerald-300 mb-2 tracking-wide">
            Projects
          </h1>
          <p className="text-gray-400 italic">
            A collection of my featured works and practical experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-700/50 rounded-2xl p-6 border border-gray-700 hover:border-emerald-400 shadow-md hover:shadow-emerald-500/20 transition duration-300"
            >
              <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:border-emerald-400 hover:text-emerald-300 transition"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm border border-emerald-400 bg-emerald-500/20 rounded-lg hover:bg-emerald-500/30 transition"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
