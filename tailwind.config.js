/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eef2f9",
          100: "#dbe4f3",
          500: "#2c4a76",
          600: "#1e3a5f",
          700: "#142844",
        },
        accent: {
          50: "#fff4ed",
          500: "#f97316",
          600: "#ea580c",
        },
      },
    },
  },
  plugins: [],
};
