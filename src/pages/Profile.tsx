import React from "react";

const Profile: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
      <img
        src="/profile.jpg" // make sure profile.jpg is in the public/ folder
        alt="Mohamed Ibrahim Yusuf"
        className="w-40 h-40 rounded-full mx-auto mb-6 shadow-lg object-cover"
      />
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <p className="text-gray-700 mb-4">
        Hello! I'm Mohamed Ibrahim Yusuf, a passionate developer with a love for creating innovative solutions. 
        I specialize in web development and have experience with various technologies including React, Node.js, and Python.
      </p>
      <p className="text-gray-700 mb-4">
        In my free time, I enjoy exploring new programming languages, contributing to open-source projects, 
        and staying updated with the latest industry trends.
      </p>
      <p className="text-gray-700">
        Feel free to explore my portfolio to see some of the projects I've worked on and learn more about my hobbies and achievements!
      </p>
    </div>
  );
};

export default Profile;
