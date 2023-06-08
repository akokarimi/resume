import React, { useRef } from "react";
import Dark from "../utils/Dark";

const Navbar = () => {
  const underline = useRef<HTMLDivElement>(null);
  const menuZeroItem = useRef<HTMLLIElement>(null);
  // let [menuModal, setMenuModal] = useState(false);

  function mouseEnter(e: any): void {
    const pointZero =
      menuZeroItem && menuZeroItem.current
        ? menuZeroItem.current.getBoundingClientRect().left
        : 0;

    if (
      e.target.className &&
      String(e.target.className).includes("navigationItem")
    ) {
      const coords = e.target.getBoundingClientRect().left - pointZero;

      if (underline && underline.current) {
        underline.current.style.width = `${
          e.target.getBoundingClientRect().width
        }px`;
        underline.current.style.transform = `translateX(${coords}px)`;
      }
    }
  }

  function mouseLeave(): void {
    if (underline && underline.current) {
      underline.current.style.width = "0px";
    }
  }

  return (
    <>
      <div className="md:flex md:gap-1 md:items-center">
        <ul
          onPointerMove={mouseEnter}
          onPointerLeave={mouseLeave}
          className="hidden md:relative md:flex md:gap-0 text-dark1 dark:text-light1"
        >
          <div
            className="w-0px h-0.5 bg-primary absolute left-0 -bottom-1 transition-all duration-300 "
            ref={underline}
          ></div>
          <li className="navigationItem px-4 " ref={menuZeroItem}>
            <a href="#Home">Home</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="navigationItem px-4"
          >
            <a href="#Home">About</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="navigationItem px-4"
          >
            <a href="#Home">Skills</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="navigationItem px-4"
          >
            <a href="#Home">Projects</a>
          </li>
          <li
            onClick={() => {
              document
                .getElementById("contactme")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="navigationItem px-4"
          >
            <a href="#Home">Contact</a>
          </li>
        </ul>
        <Dark />
      </div>
    </>
  );
};

export default Navbar;
