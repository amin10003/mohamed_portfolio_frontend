import React from "react";

const CV: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 rounded-2xl">
      <div className="w-full max-w-4xl bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-700 animate-fadeIn text-gray-200">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-emerald-300 mb-2 tracking-wide">
            Curriculum Vitae
          </h1>
          <p className="text-gray-400 text-lg italic">
            Mohamed Ibrahim Yusuf — Frontend Developer
          </p>
        </div>

        {/* Personal Info */}
        <div className="bg-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Personal Information
          </h2>
          <ul className="space-y-2 text-base">
            <li><strong>Name:</strong> Mohamed Ibrahim Yusuf</li>
            <li>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:maxamedxasancali10003@gmail.com"
                className="text-emerald-300 hover:underline"
              >
                maximaalxasancali10003@gmail.com
              </a>
            </li>
            <li><strong>Phone:</strong> +254 115 191 502</li>
            <li><strong>Location:</strong> Nairobi, Kenya</li>
          </ul>
        </div>

        {/* Education */}
        <div className="bg-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Education
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Diploma in Frontend Development</strong> — XYZ Institute
              (2023 - Present)
            </li>
            <li>
              <strong>High School Certificate</strong> — Mandera Secondary
              School
            </li>
          </ul>
        </div>

        {/* Skills */}
        <div className="bg-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Skills
          </h2>
          <ul className="grid grid-cols-2 gap-x-8 list-disc list-inside space-y-1">
            <li>HTML / CSS / JavaScript</li>
            <li>Tailwind CSS</li>
            <li>React & TypeScript</li>
            <li>Git & GitHub</li>
            <li>Node.js (Basic Backend)</li>
            <li>Linux Command Line</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="bg-gray-700/50 rounded-2xl p-6 mb-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Experience
          </h2>
          <p className="leading-relaxed">
            Developed a multi-page portfolio using React, Express, and Tailwind
            CSS integrating both frontend and backend concepts. Hands-on with
            creating APIs, connecting databases, and deploying modern web
            applications.
          </p>
        </div>

        {/* Languages */}
        <div className="bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Languages
          </h2>
          <p className="text-base">English, Swahili, Somali</p>
        </div>
      </div>
    </section>
  );
};

export default CV;
