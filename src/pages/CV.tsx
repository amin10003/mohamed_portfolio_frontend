import React from "react";

const CV: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-200 p-10">
      <div className="max-w-5xl mx-auto bg-gray-800/40 shadow-2xl rounded-2xl p-10 border border-gray-700 backdrop-blur-sm">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-emerald-300 mb-2 tracking-wide">
            Curriculum Vitae
          </h1>
          <p className="text-gray-400 text-lg italic mb-4">
            Mohamed Ibrahim Yusuf — Frontend Developer
          </p>
          <a
            href="/Mohamed_Ibrahim_Yusuf_CV.pdf"
            download
            className="px-6 py-2 rounded-lg border border-emerald-400 text-emerald-300 hover:bg-emerald-500/20 transition duration-300"
          >
            Download CV
          </a>
        </div>

        {/* Profile Summary */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 border-b border-emerald-500/30 pb-2">
            Profile Summary
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Passionate Frontend Developer specializing in creating modern, responsive, 
            and user-friendly web applications using React, TypeScript, and Tailwind CSS. 
            I aim to craft seamless digital experiences with clean code and elegant design.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 border-b border-emerald-500/30 pb-2">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-gray-300">
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">HTML5</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">CSS3</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">Tailwind CSS</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">JavaScript (ES6+)</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">React.js</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">TypeScript</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">Git & GitHub</li>
            <li className="bg-gray-700/40 p-2 rounded-lg text-center hover:bg-gray-700/70 transition">Linux</li>
          </ul>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 border-b border-emerald-500/30 pb-2">
            Education
          </h2>
          <div className="space-y-3 text-gray-300">
            <div>
              <h3 className="font-bold text-lg">Mandera Secondary School</h3>
              <p className="text-sm italic">Kenya — High School Education</p>
              <p className="text-gray-400 text-sm">Graduated: 2022</p>
            </div>
            <div>
              <h3 className="font-bold text-lg">Self-Taught Developer</h3>
              <p className="text-sm italic">
                Specialized in Frontend Development — HTML, CSS, JavaScript, React, and Tailwind
              </p>
              <p className="text-gray-400 text-sm">2023 - Present</p>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 border-b border-emerald-500/30 pb-2">
            Projects & Experience
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h3 className="font-semibold text-lg text-emerald-300">Portfolio Website</h3>
              <p className="text-gray-300 text-sm">
                Built a responsive portfolio using React, TypeScript, and Tailwind CSS to 
                showcase personal projects and skills.
              </p>
            </div>
            <div className="bg-gray-700/30 p-4 rounded-lg hover:bg-gray-700/50 transition">
              <h3 className="font-semibold text-lg text-emerald-300">Task Manager App</h3>
              <p className="text-gray-300 text-sm">
                Developed a simple React app to manage daily tasks with filtering, CRUD 
                functionality, and local storage.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center border-t border-gray-700 pt-6 mt-6">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-2">Contact</h2>
          <p className="text-gray-400">
            📧 Email:{" "}
            <a
              href="mailto:mohamedibrahimyusuf@example.com"
              className="text-emerald-400 hover:underline"
            >
              mohamedibrahimyusuf@example.com
            </a>
          </p>
          <p className="text-gray-400">
            🌍 Location: <span className="text-gray-300">Nairobi, Kenya</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CV;
