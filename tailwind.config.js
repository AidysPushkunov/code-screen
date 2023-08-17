/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#1a202c",
        slategray: "#718096",
        whitesmoke: "#f7fafc",
        aliceblue: {
          "100": "#edf2f7",
          "200": "#e2e8f0",
        },
        lightgray: "#cbd5e0",
      },
      fontFamily: {
        inter: "Inter",
      },
    },
    fontSize: {
      "6xl": "25px",
    },
  },
  corePlugins: {
    preflight: false,
  },
};