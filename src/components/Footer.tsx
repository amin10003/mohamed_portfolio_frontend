import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-12 text-center px-6 relative z-50">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Branding */}
        <div className="text-lg font-semibold">
          © {new Date().getFullYear()} My Portfolio
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <a
            href="https://github.com/amin10003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mohamed-ibrahim-yusuf-589021382/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200"
          >
            LinkedIn
          </a>
                  <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=maxamedxasancali10003@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Mohamed,"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-200 cursor-pointer underline-offset-2"
          >
            Email
          </a>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
