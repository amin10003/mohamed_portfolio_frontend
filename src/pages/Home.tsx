import React from "react";

const Home: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/profile.png" // make sure the file is in public/
          alt="profile avatar"
          className="w-16 h-16 rounded-full shadow-md object-cover"
        />
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to My Portfolio
        </h1>
      </div>
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
