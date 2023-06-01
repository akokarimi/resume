import React from "react";
import Header from "../header/Header";
const Hero = () => {
  return (
    <>
      <section className="bg-gradient-to-b md:bg-gradient-to-r from-primaryLight via-white to-secondaryLight w-screen h-screen">
        <Header />
        <p className="container text-3xl text-textColor font-bold mx-auto pt-20">
          Hi, I'm Ako Karimi, an enthusiastic Full-Stack WebDeveloper
        </p>
      </section>
    </>
  );
};

export default Hero;
