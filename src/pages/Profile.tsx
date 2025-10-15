import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosConfig";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
  FaLaptopCode,
  FaUserGraduate,
} from "react-icons/fa";
import { SiJavascript, SiReact } from "react-icons/si";

// ✅ Profile Data Interface
interface ProfileData {
  id?: number;
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
  photoUrl?: string;
}

// ✅ Fetch function
const fetchProfile = async (): Promise<ProfileData> => {
  const { data } = await api.get("/profiles");
  if (Array.isArray(data)) {
    if (data.length === 0) throw new Error("No profiles found");
    return data.find((p: ProfileData) => p.id === 2) || data[0];
  }
  return data;
};

// ✅ Profile Component
const Profile: React.FC = () => {
  const { data: profile, isLoading, isError } = useQuery<ProfileData>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen text-emerald-300 text-lg">
        Loading profile...
      </div>
    );

  if (isError || !profile)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400 text-lg">
        Failed to load profile.
      </div>
    );

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-6">
      <div className="max-w-5xl w-full bg-gray-800/70 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-gray-700 animate-fadeIn">
        {/* ---------- Header ---------- */}
        <div className="flex flex-col items-center relative">
          {/* Floating Icons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10 flex space-x-4 animate-bounce-slow">
            <FaFileAlt size={26} className="text-emerald-300 hover:scale-125 transition-transform duration-500" />
            <FaLaptopCode size={26} className="text-emerald-300 hover:scale-125 transition-transform duration-500" />
            <SiJavascript size={26} color="#F7DF1E" className="hover:scale-125 transition-transform duration-500" />
            <SiReact size={26} color="#61DAFB" className="hover:scale-125 transition-transform duration-500" />
          </div>

          <img
            src={profile.photoUrl || "/profile.png"}
            alt={profile.name}
            className="w-40 h-40 rounded-full border-4 border-emerald-400 shadow-xl transform hover:scale-105 transition duration-500 object-cover"
          />

          <h1 className="text-4xl md:text-5xl font-extrabold text-emerald-300 mt-4 text-center drop-shadow-lg tracking-wide">
            {profile.name}
          </h1>
          <p className="text-gray-300 italic mt-2 text-center max-w-xl">{profile.bio}</p>
        </div>

        {/* ---------- Info Grid ---------- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Personal Info */}
          <div className="bg-gray-700/40 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-transform hover:scale-[1.02] duration-300">
            <h2 className="text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
              <FaUserGraduate size={20} color="#10B981" /> Personal Information
            </h2>
            <ul className="text-gray-200 space-y-2 text-base">
              <li><strong>Nationality:</strong> {profile.nationality}</li>
              <li>
                <strong>Date of Birth:</strong>{" "}
                {profile.dateOfBirth
                  ? new Date(profile.dateOfBirth).toDateString()
                  : "N/A"}
              </li>
              <li><strong>Location:</strong> {profile.location}</li>
              <li><strong>Availability:</strong> {profile.availability}</li>
              <li>
                <strong>Willing to Relocate:</strong>{" "}
                {profile.willingToRelocate ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-700/40 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-transform hover:scale-[1.02] duration-300">
            <h2 className="text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
              <FaFileAlt size={20} color="#10B981" /> Contact Information
            </h2>
            <ul className="text-gray-200 space-y-2 text-base">
              <li><strong>Email:</strong> {profile.email}</li>
              <li><strong>Phone:</strong> {profile.phone}</li>
              <li><strong>Address:</strong> {profile.address}</li>
            </ul>
          </div>
        </div>

        {/* ---------- Professional Info ---------- */}
        <div className="mt-8 bg-gray-700/40 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
            <FaLaptopCode size={20} color="#10B981" /> Professional Information
          </h2>
          <ul className="text-gray-200 space-y-2 text-base">
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href={
                  profile.github.startsWith("http")
                    ? profile.github
                    : `https://github.com/${profile.github}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:underline"
              >
                {profile.github}
              </a>
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={
                  profile.linkedin.startsWith("http")
                    ? profile.linkedin
                    : `https://linkedin.com/in/${profile.linkedin
                        .trim()
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`
                }
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-300 hover:underline"
              >
                {profile.linkedin}
              </a>
            </li>
            <li><strong>Expected Salary:</strong> {profile.expectedSalary}</li>
            <li><strong>Notice Period:</strong> {profile.noticePeriod}</li>
            <li><strong>Referees:</strong> {profile.referees}</li>
          </ul>
        </div>

        {/* ---------- Skills ---------- */}
        <div className="mt-8 bg-gray-700/40 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
            <FaLaptopCode size={20} color="#10B981" /> Skills
          </h2>
          <p className="text-gray-200 text-base leading-relaxed">{profile.skills}</p>
        </div>

        {/* ---------- Languages ---------- */}
        <div className="mt-6 bg-gray-700/40 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/20 transition-transform hover:scale-[1.02] duration-300">
          <h2 className="text-2xl font-semibold text-emerald-300 mb-3 flex items-center gap-2">
            <FaFileAlt size={20} color="#10B981" /> Languages
          </h2>
          <p className="text-gray-200 text-base leading-relaxed">{profile.languages}</p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
