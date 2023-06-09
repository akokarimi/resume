/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
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
        primary: "#0095eb",
        light1: "#f7f7f7",
        light2: "#eeeeee",
        dark: "#272727",
        dark1: "#474747",
        dark2: "#707070",
      },
      keyframes: {
        fill: {
          from: { width: "0%" },
        },
        fill2: {
          from: { height: "0%" },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
