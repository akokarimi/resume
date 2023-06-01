import React from "react";
import Navbar from "../navbar/Navbar";

const Header = () => {
  return (
    <section className="flex items-center justify-between w-full container pt-1 bg-color-none">
      <img
        className="w-24 md:w-36 bg-color-textColor "
        src="/img/2.png"
        alt="akokarimi"
      />

      <Navbar />
    </section>
  );
};

export default Header;
