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
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="p-6 bg-white rounded-xl shadow-md flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
            <div className="mt-4 flex gap-3">
              <a
                href={project.demo}
                className="px-3 py-1 text-sm rounded-md border hover:bg-gray-100 transition"
              >
                Demo
              </a>
              <a
                href={project.code}
                className="px-3 py-1 text-sm rounded-md bg-slate-800 text-white hover:bg-slate-700 transition"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
