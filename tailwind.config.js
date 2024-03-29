/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "twitter-blue": "#1DA1F2",
        "dark-gray": "hsla(0,0%,89%,.8)",
      },
      gridTemplateColumns: {
        "3cols": "1fr 2fr 1fr",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
