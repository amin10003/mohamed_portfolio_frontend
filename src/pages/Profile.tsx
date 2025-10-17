import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../context/ThemeContext";
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
  const { theme } = useContext(ThemeContext);
  const { data: profile, isLoading, isError } = useQuery<ProfileData>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  // Loading & Error states
  if (isLoading)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-emerald-300" : "text-emerald-600"
        }`}
      >
        Loading profile...
      </div>
    );

  if (isError || !profile)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-red-400" : "text-red-600"
        }`}
      >
        Failed to load profile.
      </div>
    );

  return (
    <section
      className={`min-h-screen p-8 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-900 text-gray-200"
          : "bg-blue-50 text-gray-800"
      }`}
    >
      <div
        className={`max-w-5xl mx-auto rounded-3xl shadow-2xl p-10 border backdrop-blur-lg transition-all duration-300 ${
          theme === "dark"
            ? "bg-gray-800/40 border-gray-700 text-gray-200"
            : "bg-white/80 border-gray-300 text-gray-800"
        }`}
      >
        {/* ---------- Header Section ---------- */}
        <div className="flex flex-col items-center text-center relative mb-10">
          {/* Floating Icons */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex space-x-4 animate-bounce-slow">
            <FaFileAlt
              size={26}
              className={`${
                theme === "dark" ? "text-emerald-300" : "text-emerald-600"
              } hover:scale-125 transition-transform duration-500`}
            />
            <FaLaptopCode
              size={26}
              className={`${
                theme === "dark" ? "text-emerald-300" : "text-emerald-600"
              } hover:scale-125 transition-transform duration-500`}
            />
            <SiJavascript
              size={26}
              color="#F7DF1E"
              className="hover:scale-125 transition-transform duration-500"
            />
            <SiReact
              size={26}
              color="#61DAFB"
              className="hover:scale-125 transition-transform duration-500"
            />
          </div>

          {/* Profile Picture */}
          <img
            src={profile.photoUrl || "/profile.png"}
            alt={profile.name}
            className={`w-40 h-40 rounded-full border-4 shadow-xl mb-4 object-cover ${
              theme === "dark" ? "border-emerald-400" : "border-emerald-600"
            }`}
          />

          {/* Name & Bio */}
          <h1
            className={`text-4xl md:text-5xl font-extrabold tracking-wide mb-2 ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            {profile.name}
          </h1>
          <p
            className={`italic text-lg max-w-xl ${
              theme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {profile.bio}
          </p>
        </div>

        {/* ---------- Info Cards ---------- */}
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Personal Info */}
          <div
            className={`p-6 rounded-2xl border shadow-lg transition-transform hover:scale-[1.02] ${
              theme === "dark"
                ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
                : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${
                theme === "dark" ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              <FaUserGraduate /> Personal Information
            </h2>
            <ul
              className={`space-y-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <li>
                <strong>Nationality:</strong> {profile.nationality}
              </li>
              <li>
                <strong>Date of Birth:</strong>{" "}
                {profile.dateOfBirth
                  ? new Date(profile.dateOfBirth).toDateString()
                  : "N/A"}
              </li>
              <li>
                <strong>Location:</strong> {profile.location}
              </li>
              <li>
                <strong>Availability:</strong> {profile.availability}
              </li>
              <li>
                <strong>Willing to Relocate:</strong>{" "}
                {profile.willingToRelocate ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div
            className={`p-6 rounded-2xl border shadow-lg transition-transform hover:scale-[1.02] ${
              theme === "dark"
                ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
                : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
            }`}
          >
            <h2
              className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${
                theme === "dark" ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              <FaFileAlt /> Contact Information
            </h2>
            <ul
              className={`space-y-2 ${
                theme === "dark" ? "text-gray-200" : "text-gray-700"
              }`}
            >
              <li>
                <strong>Email:</strong> {profile.email}
              </li>
              <li>
                <strong>Phone:</strong> {profile.phone}
              </li>
              <li>
                <strong>Address:</strong> {profile.address}
              </li>
            </ul>
          </div>
        </div>

        {/* ---------- Professional Info ---------- */}
        <div
          className={`mt-8 p-6 rounded-2xl border shadow-lg transition-transform hover:scale-[1.02] ${
            theme === "dark"
              ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
              : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            <FaLaptopCode /> Professional Information
          </h2>
          <ul
            className={`space-y-2 ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
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
                className={`${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                } hover:underline`}
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
                className={`${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                } hover:underline`}
              >
                {profile.linkedin}
              </a>
            </li>
            <li>
              <strong>Expected Salary:</strong> {profile.expectedSalary}
            </li>
            <li>
              <strong>Notice Period:</strong> {profile.noticePeriod}
            </li>
            <li>
              <strong>Referees:</strong> {profile.referees}
            </li>
          </ul>
        </div>

        {/* ---------- Skills ---------- */}
        <div
          className={`mt-8 p-6 rounded-2xl border shadow-lg transition-transform hover:scale-[1.02] ${
            theme === "dark"
              ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
              : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            <FaLaptopCode /> Skills
          </h2>
          <p
            className={`text-base leading-relaxed ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {profile.skills}
          </p>
        </div>

        {/* ---------- Languages ---------- */}
        <div
          className={`mt-6 p-6 rounded-2xl border shadow-lg transition-transform hover:scale-[1.02] ${
            theme === "dark"
              ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
              : "bg-gray-100/60 border-gray-300 hover:border-emerald-500"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-3 flex items-center gap-2 ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            <FaFileAlt /> Languages
          </h2>
          <p
            className={`text-base leading-relaxed ${
              theme === "dark" ? "text-gray-200" : "text-gray-700"
            }`}
          >
            {profile.languages}
          </p>
        </div>

        {/* ---------- Footer Note ---------- */}
        <div
          className={`text-center mt-12 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          “A developer’s profile is never complete — it grows with every line of
          code written.”
        </div>
      </div>
    </section>
  );
};

export default Profile;
