import React from "react";

interface ProfileData {
  name: string;
  bio: string;
  nationality: string;
  availability: string;
  location: string;
  dateOfBirth: string;
  email: string;
  phone: string;
  address: string;
  github: string;
  linkedin: string;
  expectedSalary: number | string;
  noticePeriod: string;
  referees: string;
  willingToRelocate: boolean;
  languages: string;
  skills: string;
  photoUrl: string;
}

const Profile: React.FC = () => {
  // Static profile data (replace later with API or DB data)
  const profile: ProfileData = {
    name: "Mohamed Ibrahim",
    bio: "Frontend Developer passionate about building beautiful, responsive web apps using React and Tailwind CSS.",
    nationality: "Somali",
    availability: "Immediate",
    location: "Nairobi, Kenya",
    dateOfBirth: "2000-06-15",
    email: "mohamed@example.com",
    phone: "+254712345678",
    address: "Nairobi, Kenya",
    github: "https://github.com/mohamed",
    linkedin: "https://linkedin.com/in/mohamed",
    expectedSalary: "KES 80,000",
    noticePeriod: "1 Month",
    referees: "Available upon request",
    willingToRelocate: true,
    languages: "English, Swahili, Somali",
    skills: "React, Tailwind CSS, Node.js, Git, JavaScript",
    photoUrl: "profile.png", // replace with your photo
  };

  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl p-8">
        {/* Profile Photo & Name */}
        <div className="flex flex-col items-center text-center mb-6">
          <img
            src={profile.photoUrl}
            alt={`${profile.name} photo`}
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md mb-4"
          />
          <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-600 mt-2">{profile.bio}</p>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Personal Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Personal Info</h2>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Nationality:</strong> {profile.nationality}</li>
              <li><strong>Date of Birth:</strong> {profile.dateOfBirth}</li>
              <li><strong>Location:</strong> {profile.location}</li>
              <li><strong>Availability:</strong> {profile.availability}</li>
              <li>
                <strong>Willing to Relocate:</strong>{" "}
                {profile.willingToRelocate ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Info</h2>
            <ul className="text-gray-700 space-y-1">
              <li><strong>Email:</strong> {profile.email}</li>
              <li><strong>Phone:</strong> {profile.phone}</li>
              <li><strong>Address:</strong> {profile.address}</li>
            </ul>
          </div>
        </div>

        {/* Professional Info */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Info</h2>
          <ul className="text-gray-700 space-y-1">
            <li>
              <strong>GitHub:</strong>{" "}
              <a href={profile.github} className="text-blue-600 hover:underline">
                {profile.github}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a href={profile.linkedin} className="text-blue-600 hover:underline">
                {profile.linkedin}
              </a>
            </li>
            <li><strong>Expected Salary:</strong> {profile.expectedSalary}</li>
            <li><strong>Notice Period:</strong> {profile.noticePeriod}</li>
            <li><strong>Referees:</strong> {profile.referees}</li>
          </ul>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Skills</h2>
          <p className="text-gray-700">{profile.skills}</p>
        </div>

        {/* Languages */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Languages</h2>
          <p className="text-gray-700">{profile.languages}</p>
        </div>

        {/* Edit Button */}
        <div className="mt-8 text-right">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition">
            Edit Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
