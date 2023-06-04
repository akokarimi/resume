/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        sm: "4rem",
        md: "3rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "8rem",
        "3xl": "10rem",
      },
    },
    extend: {
      colors: {
        textColor: "#00296b",
        primary: "#c1fffa",
        secondary: "#ffcef4",
        primaryLight: "rgba(193,255,250,0.4)",
        secondaryLight: "rgba(255,206,244,0.4)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
