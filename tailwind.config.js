/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // ✅ Important line
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
