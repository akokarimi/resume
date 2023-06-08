import React, { useState } from "react";
import Dark from "../utils/Dark";

const NavModal = () => {
  let [modal, setModal] = useState(false);

  return (
    <div className="z-50">
      <div
        onClick={() => {
          setModal(false);
        }}
        className={`fixed top-0 left-0 transition duration-500 w-screen h-screen
        ${modal ? "" : "hidden"}`}
      ></div>
      <div
        className={`fixed py-4 bg-light1 dark:bg-dark1 h-screen w-[50vw] left-0 top-0 transition duration-500 shadow-2xl z-20
        ${modal ? "translate-x-0 opacity-1" : "-translate-x-full opacity-40"}`}
      >
        <ul className="relative border border-gray-200 text-left flex flex-col gap-5  py-4 m-4 rounded-2xl shadow-lg bg-white dark:bg-dark1 text-xs">
          <div
            className="fixed w-9 h-9 fill-dark1 -right-8 top-[40%] bg-light1 dark:bg-dark1 p-1 py-2 rounded-r-lg border border-gray-300 border-l-0"
            onClick={() => {
              setModal(!modal);
            }}
          >
            <div className="relative bg-white dark:bg-dark1">
              <span
                className={`h-[2px]  block bg-dark1 dark:bg-light1 ml-1 absolute left-1 
              after:h-[2px] after:w-[20px] after:block after:bg-dark1 after:ml-1  after:absolute after:-left-1  dark:after:bg-light1
              before:h-[2px] before:w-[20px] before:block before:bg-dark1 before:ml-1 before:absolute before:-left-1  dark:before:bg-light1 transition duration-700
              ${
                modal
                  ? "w-0 top-0 before:rotate-45  after:-rotate-45 before:top-2 after:top-2"
                  : "w-[20px] top-2 after:-top-[8px] before:top-[8px]"
              } `}
              >
                &nbsp;
              </span>
            </div>
          </div>

          <li
            onClick={() => {
              document
                .getElementById("home")
                ?.scrollIntoView({ behavior: "smooth" });
              setModal(false);
            }}
            className="navigationItem px-4 text-dark1 hover:underline hover:decoration-primary decoration-2 hover:underline-offset-4 transition duration-500"
          >
            <a href="#Home" className="dark:text-light1">
              Home
            </a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
              setModal(false);
            }}
            className="navigationItem px-4 text-dark1 hover:underline hover:decoration-primary decoration-2 hover:underline-offset-4 transition duration-500"
          >
            <a href="#Home" className="dark:text-light1">
              About Me
            </a>
          </li>

          <li
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
              setModal(false);
            }}
            className="navigationItem px-4 text-dark1 hover:underline hover:decoration-primary decoration-2 hover:underline-offset-4 transition duration-500"
          >
            <a href="#Home" className="dark:text-light1">
              My Skills
            </a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
              setModal(false);
            }}
            className="navigationItem px-4 text-dark1 hover:underline hover:decoration-primary decoration-2 hover:underline-offset-4 transition duration-500"
          >
            <a href="#Home" className="dark:text-light1">
              My Projects
            </a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("contactme")
                ?.scrollIntoView({ behavior: "smooth" });
              setModal(false);
            }}
            className="navigationItem px-4 text-dark1 hover:underline hover:decoration-primary decoration-2 hover:underline-offset-4 transition duration-500"
          >
            <a href="#Home" className="dark:text-light1">
              Contact Me
            </a>
          </li>
        </ul>
        <div className="border border-gray-200 text-left flex justify-between items-center p-4 m-4 rounded-2xl shadow-lg bg-white dark:bg-dark1 dark:text-light1 text-xs ">
          <p className="font-bold">Dark Mode:</p>
          <Dark />
        </div>
      </div>
    </div>
  );
};

export default NavModal;
