import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaLeaf } from "react-icons/fa"; // Added small logo/icon

const Footer: React.FC = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      className={`py-6 text-center px-6 relative z-50 transition-colors duration-300 ${
        theme === "dark"
          ? "bg-gray-950 border-gray-700 text-gray-200"
          : "bg-gray-50 border-gray-200 text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Branding */}
        <div className="flex items-center gap-2">
          <FaLeaf
            className={`text-xl ${
              theme === "dark" ? "text-emerald-400" : "text-emerald-600"
            }`}
          />
          <div
            className={`text-lg font-semibold ${
              theme === "dark" ? "text-emerald-300" : "text-emerald-700"
            }`}
          >
            © {new Date().getFullYear()} Mohamed Ibrahim Yusuf
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          {[
            {
              href: "https://github.com/amin10003",
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/mohamed-ibrahim-yusuf-589021382/",
              label: "LinkedIn",
            },
            {
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=maxamedxasancali10003@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Mohamed,",
              label: "Email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative transition duration-200 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:transition-all after:duration-300 ${
                theme === "dark"
                  ? "hover:text-emerald-400 text-gray-400 after:bg-emerald-400"
                  : "hover:text-emerald-600 text-gray-700 after:bg-emerald-600"
              } hover:after:w-full`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
