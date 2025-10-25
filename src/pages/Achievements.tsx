import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { ThemeContext } from "../context/ThemeContext";
import { FaAward, FaTrophy, FaStar } from "react-icons/fa";
import api from "../api/axiosConfig";

// ✅ Achievement Data Interface
interface AchievementData {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: string;
  category: string;
}

// ✅ Fetch function
const fetchAchievements = async (): Promise<AchievementData[]> => {
  const { data } = await api.get("/achievements");
  return data;
};

// // ✅ Icon mapping
// const getIcon = (iconName: string) => {
//   switch (iconName.toLowerCase()) {
//     case 'award':
//       return <FaAward />;
//     case 'trophy':
//       return <FaTrophy />;
//     case 'star':
//       return <FaStar />;
//     default:
//       return <FaAward />;
//   }
// };
// ✅ Safe Icon Mapping
const getIcon = (iconName?: string | null) => {
  if (!iconName) return <FaAward />; // default if icon is null or undefined

  switch (iconName.toLowerCase()) {
    case "award":
      return <FaAward />;
    case "trophy":
      return <FaTrophy />;
    case "star":
      return <FaStar />;
    default:
      return <FaAward />;
  }
};

const Achievements: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { data: achievements, isLoading, isError } = useQuery<AchievementData[]>({
    queryKey: ["achievements"],
    queryFn: fetchAchievements,
  });

  // Loading state
  if (isLoading)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-emerald-300" : "text-emerald-600"
        }`}
      >
        Loading achievements...
      </div>
    );

  // Error state
  if (isError || !achievements)
    return (
      <div
        className={`flex items-center justify-center min-h-screen text-lg ${
          theme === "dark" ? "text-red-400" : "text-red-600"
        }`}
      >
        Failed to load achievements.
      </div>
    );

  return (
    <section
      className={`min-h-screen flex items-center justify-center p-8 transition-colors duration-500 ${
        theme === "dark"
          ? "bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-200"
          : "bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 text-gray-800"
      }`}
    >
      <div
        className={`w-full max-w-6xl backdrop-blur-md rounded-3xl p-10 shadow-2xl border transition-all duration-500 ${
          theme === "dark"
            ? "bg-gray-800/60 border-gray-700"
            : "bg-white/80 border-gray-300"
        }`}
      >
        {/* Header */}
        <div className="text-center mb-10">
          <img
            src="/profile.png"
            alt="Achievements"
            className={`w-32 h-32 rounded-full border-4 shadow-lg mx-auto mb-4 object-cover ${
              theme === "dark" ? "border-emerald-400" : "border-emerald-600"
            }`}
          />
          <h1
            className={`text-4xl font-extrabold mb-2 tracking-wide ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-600"
            }`}
          >
            Achievements
          </h1>
          <p
            className={`italic text-lg ${
              theme === "dark" ? "text-gray-400" : "text-gray-600"
            }`}
          >
            A showcase of my milestones, certifications, and recognitions as a
            frontend developer.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {achievements.map((achievement) => (
            <div
              key={achievement.id}
              className={`rounded-2xl p-6 border shadow-md hover:shadow-emerald-500/20 hover:scale-105 transition duration-300 text-center ${
                theme === "dark"
                  ? "bg-gray-700/40 border-gray-700 hover:border-emerald-400"
                  : "bg-gray-100/70 border-gray-300 hover:border-emerald-500"
              }`}
            >
              <div
                className={`flex justify-center items-center mb-3 text-4xl ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-600"
                }`}
              >
                {getIcon(achievement.icon)}
              </div>
              <h2
                className={`text-xl font-semibold mb-2 ${
                  theme === "dark" ? "text-emerald-300" : "text-emerald-700"
                }`}
              >
                {achievement.title}
              </h2>
              <p
                className={`text-sm mb-2 leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}
              >
                {achievement.description}
              </p>
              <p
                className={`text-xs italic ${
                  theme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Year: {achievement.year}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div
          className={`text-center mt-12 text-sm border-t pt-4 ${
            theme === "dark"
              ? "text-gray-400 border-gray-700"
              : "text-gray-600 border-gray-300"
          }`}
        >
          “Every achievement is a step closer to mastering the art of code and
          design.”
        </div>
      </div>
    </section>
  );
};

export default Achievements;
