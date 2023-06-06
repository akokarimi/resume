import React, { useState } from "react";

const NavModal = () => {
  let [modal, setModal] = useState(false);

  return (
    <div className="z-50 md:hidden ">
      <div
        onClick={() => {
          setModal(false);
        }}
        className={`fixed top-0 left-0 transition duration-500 w-screen h-screen
        ${modal ? "" : "hidden"}`}
      ></div>
      <div
        className={`fixed py-4 bg-light1 h-screen w-[50vw] left-0 top-0 transition duration-500 shadow-2xl
        ${modal ? "translate-x-0 opacity-1" : "-translate-x-full opacity-40"}`}
      >
        <ul className="relative border border-gray-300 text-left flex flex-col gap-5  py-4 m-4 rounded-2xl ">
          <div
            className="fixed w-9 h-9 fill-dark1 -right-8 top-[40%] bg-light1 p-1 py-2 rounded-r-lg border border-gray-300 border-l-0"
            onClick={() => {
              setModal(!modal);
            }}
          >
            <div className="rerlative">
              <span
                className={`h-[2px] w-[20px] block bg-dark1 ml-1 absolute left-1 top-4
              after:h-[2px] after:w-[20px] after:block after:bg-dark1 after:ml-1  after:absolute after:-left-1 after:-top-[8px]
              before:h-[2px] before:w-[20px] before:block before:bg-dark1 before:ml-1 before:absolute before:-left-1 before:top-[8px] transition duration-700
              ${
                modal
                  ? "bg-transparent before:rotate-45 top-3 after:-rotate-45 before:top-0 after:top-0"
                  : ""
              } `}
              >
                &nbsp;
              </span>
            </div>
          </div>

          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">Home</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">About Me</a>
          </li>

          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">My Skills</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">My Projects</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">Contact Me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavModal;
