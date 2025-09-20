import React from "react";

const Hobbies: React.FC = () => (
  <section className="p-6">
    <h1 className="text-3xl font-bold mb-6">Hobbies</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="p-4 bg-white rounded-lg shadow-md">
        ⚽ <span className="font-semibold">Football</span>
        <p className="text-gray-600 mt-2">
          I enjoy playing football with friends during weekends. It keeps me active and teaches teamwork.
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        💻 <span className="font-semibold">Coding Challenges</span>
        <p className="text-gray-600 mt-2">
          Solving algorithm problems on platforms like LeetCode and CodeWars to sharpen problem-solving skills.
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        📖 <span className="font-semibold">Reading Tech Blogs</span>
        <p className="text-gray-600 mt-2">
          Staying updated with the latest trends in JavaScript, React, and software engineering best practices.
        </p>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md">
        🎨 <span className="font-semibold">UI Design Experiments</span>
        <p className="text-gray-600 mt-2">
          I love experimenting with TailwindCSS, animations, and creating modern UI layouts.
        </p>
      </div>
    </div>
  </section>
);

export default Hobbies;
