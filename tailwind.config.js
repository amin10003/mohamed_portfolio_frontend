/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      // Add light mode variants
      backgroundColor: {
        'light': '#f8fafc',
      },
      textColor: {
        'light': '#1f2937',
      }
    },
  },
  plugins: [],
}