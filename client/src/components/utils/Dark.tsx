import React, { useContext } from "react";
import DarkModeContext from "../../context/DarkContext";

const Dark = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <div
      className="relative flex justify-between bg-white dark:bg-dark1 border border-gray-300  w-12 h-7 rounded-3xl px-1"
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <span className="absolute left-[3px] top-[3px] h-9 w-9 bg- rounded-3xl z-10"></span>
      <svg
        className={`w-4 z-20 transition duration-500 ${
          !darkMode ? "fill-orange-300" : "fill-gray-300"
        }`}
      >
        <use xlinkHref="img/svg-icons.svg#sun"></use>
      </svg>
      <svg
        className={`w-4 z-20 transition-all duration-500 ${
          darkMode ? "fill-orange-300" : "fill-gray-300"
        }`}
      >
        <use xlinkHref="img/svg-icons.svg#moon"></use>
      </svg>
    </div>
  );
};

export default Dark;
