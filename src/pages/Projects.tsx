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
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 rounded-2xl">
      <div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-700 animate-fadeIn">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src="profile.png" // 🖥️ optional: replace with your project icon
            alt="Projects Icon"
            className="w-36 h-36 rounded-full object-cover border-4 border-emerald-400 shadow-lg mb-4 transform hover:scale-105 transition duration-500"
          />
          <h1 className="text-4xl font-extrabold text-emerald-300 font-sans tracking-wide drop-shadow-md">
            Projects
          </h1>
          <p className="text-gray-300 mt-3 text-lg italic leading-relaxed">
            A collection of my featured works and hands-on development projects.
          </p>
        </div>

        {/* Projects List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gray-700/50 rounded-2xl p-6 shadow-lg border border-gray-700 hover:border-emerald-400 hover:shadow-emerald-500/20 transition duration-300 hover:scale-[1.02]"
            >
              <h2 className="text-2xl font-semibold text-emerald-400 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-200 text-base leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex gap-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg border border-gray-600 text-gray-200 hover:text-emerald-300 hover:border-emerald-400 transition"
                >
                  Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm rounded-lg bg-emerald-500/20 border border-emerald-400 text-emerald-300 hover:bg-emerald-500/30 transition"
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
