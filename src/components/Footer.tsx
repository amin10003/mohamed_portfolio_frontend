import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 text-center px-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Branding */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} My Portfolio
        </div>

        {/* Social Links */}
        <div className="flex gap-4">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            LinkedIn
          </a>
          <a
            href="mailto:your.email@example.com"
            className="hover:text-gray-400"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
