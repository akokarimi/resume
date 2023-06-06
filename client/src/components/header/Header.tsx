import React from "react";
import Navbar from "../navbar/Navbar";
import NavModal from "../navbar/NavModal";

const Header = () => {
  return (
    <section className="top-0 left-0 z-10 flex items-center justify-between w-screen container pt-1 bg-color-none mb-2">
      <img
        className="w-24 md:w-36 bg-color-dark1 hover:scale-110 transition duration-100"
        src="/img/2.png"
        alt="akokarimi"
      />

      <Navbar />
    </section>
  );
};

export default Header;
