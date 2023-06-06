import React, { useRef } from "react";

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
      <div className="hidden md:block">
        <ul
          onPointerMove={mouseEnter}
          onPointerLeave={mouseLeave}
          className="relative flex gap-0"
        >
          <div
            className="w-0px h-0.5 bg-primary absolute left-0 -bottom-1 transition-all duration-300 "
            ref={underline}
          ></div>
          <li className="navigationItem px-4 text-dark1" ref={menuZeroItem}>
            <a href="#Home">Home</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">About</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">Skills</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">Projects</a>
          </li>
          <li className="navigationItem px-4 text-dark1">
            <a href="#Home">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
