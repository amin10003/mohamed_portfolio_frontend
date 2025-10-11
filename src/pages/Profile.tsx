import React from "react";
import { useQuery } from "@tanstack/react-query";
import api from "../api/axiosConfig";

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
  photoUrl?: string; // made optional
}

// ✅ Fetch the first valid profile (instead of hardcoding /1)
const fetchProfile = async (): Promise<ProfileData> => {
  const { data } = await api.get(`/profiles`);
  if (!data || data.length === 0) throw new Error("No profiles found");
  // Pick the profile with id = 2 (most complete), fallback to the first one
  const profile = data.find((p: any) => p.id === 2) || data[0];
  return profile;
};

const Profile: React.FC = () => {
  const { data: profile, isLoading, isError } = useQuery<ProfileData>({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-300 text-lg">
        Loading profile...
      </div>
    );
  }

  if (isError || !profile) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-400 text-lg">
        Failed to load profile.
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-8 rounded-2xl" >
      <div className="w-full max-w-3xl bg-gray-800/60 backdrop-blur-md shadow-2xl rounded-3xl p-10 border border-gray-700 animate-fadeIn">
        {/* Profile Photo & Name */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={
              profile.photoUrl ||
              "profile.png"
            }
            alt={`${profile.name} photo`}
            className="w-36 h-36 rounded-full object-cover border-4 border-emerald-400 shadow-lg mb-4 transform hover:scale-105 transition duration-500"
          />
          <h1 className="text-4xl font-extrabold text-emerald-300 font-sans tracking-wide drop-shadow-md">
            {profile.name}
          </h1>
          <p className="text-gray-300 mt-3 text-lg italic leading-relaxed">
            {profile.bio}
          </p>
        </div>

        {/* Info Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {/* Personal Info */}
          <div className="bg-gray-700/50 rounded-2xl p-5 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
              Personal Info
            </h2>
            <ul className="text-gray-200 space-y-2 text-base">
              <li><strong>Nationality:</strong> {profile.nationality}</li>
              <li><strong>Date of Birth:</strong> {new Date(profile.dateOfBirth).toDateString()}</li>
              <li><strong>Location:</strong> {profile.location}</li>
              <li><strong>Availability:</strong> {profile.availability}</li>
              <li>
                <strong>Willing to Relocate:</strong>{" "}
                {profile.willingToRelocate ? "Yes" : "No"}
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-700/50 rounded-2xl p-5 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
            <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
              Contact Info
            </h2>
            <ul className="text-gray-200 space-y-2 text-base">
              <li><strong>Email:</strong> {profile.email}</li>
              <li><strong>Phone:</strong> {profile.phone}</li>
              <li><strong>Address:</strong> {profile.address}</li>
            </ul>
          </div>
        </div>

        {/* Professional Info */}
        <div className="mt-8 bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Professional Info
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

            {/* ✅ Correct LinkedIn link handling */}
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href={
                  profile.linkedin?.startsWith("http")
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

        {/* Skills */}
        <div className="mt-8 bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Skills
          </h2>
          <p className="text-gray-200 text-base leading-relaxed">
            {profile.skills}
          </p>
        </div>

        {/* Languages */}
        <div className="mt-6 bg-gray-700/50 rounded-2xl p-6 shadow-lg hover:shadow-emerald-500/20 transition duration-300">
          <h2 className="text-2xl font-semibold text-emerald-400 mb-3">
            Languages
          </h2>
          <p className="text-gray-200 text-base leading-relaxed">
            {profile.languages}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
