// src/pages/Home.tsx
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Welcome to My Portfolio</h1>
      <p className="text-lg text-gray-700 mb-4">
        Hi, I’m Mohamed Ibrahim Yusuf 👋. This is my personal portfolio where I share
        my journey as a developer, showcase my projects, highlight my achievements,
        and talk about my hobbies and interests.
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Use the navigation above to explore different sections:
      </p>
      <ul className="list-disc list-inside text-gray-600 space-y-2">
        <li><strong>Profile</strong> – Learn more about me</li>
        <li><strong>Projects</strong> – Check out my recent work</li>
        <li><strong>Achievements</strong> – Things I’m proud of</li>
        <li><strong>Hobbies</strong> – What I do for fun</li>
        <li><strong>Blog</strong> – Read my latest thoughts</li>
      </ul>
    </div>
  );
};

export default Home;
