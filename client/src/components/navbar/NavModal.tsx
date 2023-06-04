import React, { useState } from "react";

const NavModal = () => {
  let [modal, setModal] = useState(false);

  return (
    <div className="z-20 md:hidden">
      <svg
        className="w-6 h-6 fill-textColor"
        onClick={() => {
          setModal(true);
        }}
      >
        <use xlinkHref="img/svg-icons.svg#icon-menu"></use>
      </svg>
      <div
        onClick={() => {
          setModal(false);
        }}
        className={`fixed top-0 left-0 transition duration-500 w-screen h-screen
        ${modal ? "" : "hidden"}`}
      ></div>
      <div
        className={`absolute py-4 bg-white h-screen w-[75vw] right-0 top-0 transition duration-500 overflow-hidden
        ${modal ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        <ul className="relative text-center flex flex-col gap-5 pt-10">
          <svg
            onClick={() => {
              setModal(false);
            }}
            className="w-6 h-6 self-start ml-2 "
          >
            <use xlinkHref="img/svg-icons.svg#icon-clear"></use>
          </svg>
          <li className="navigationItem px-4 text-textColor">
            <a href="#Home">Home</a>
          </li>
          <li className="navigationItem px-4 text-textColor">
            <a href="#Home">Skills</a>
          </li>
          <li className="navigationItem px-4 text-textColor">
            <a href="#Home">Projects</a>
          </li>
          <li className="navigationItem px-4 text-textColor">
            <a href="#Home">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavModal;
