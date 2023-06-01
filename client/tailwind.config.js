/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
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
};
