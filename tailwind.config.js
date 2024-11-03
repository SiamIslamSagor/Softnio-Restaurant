/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FEBF00",
        "text-primary": "#0A1425",
        red: "#BD1F17",
      },
    },
  },
  plugins: [],
};
