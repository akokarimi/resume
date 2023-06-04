import React from "react";
import Header from "../header/Header";
import Contacts from "./Contacts";

const Hero = () => {
  return (
    <>
      <section
        className="bg-gradient-to-b md:bg-gradient-to-r from-primaryLight via-white to-secondaryLight
      h-screen relative"
      >
        <Header />
        <Contacts />
        <div className="flex flex-col-reverse md:flex-row justify-between items-center container mx-auto pt-8 gap-2 ">
          <div className="text-center md:text-left md:w-1/2 flex flex-col gap-8">
            <p className="text-3xl md:text-4xl lg:text-5xl text-textColor font-bold">
              Hi, I'm Ako Karimi
            </p>
            <p className="text-md md:text-2xl text-textColor">
              I'm an Enthusiastic Full Stack Web Developer, Based in Sanandaj,
              Iran.
            </p>
          </div>

          <div className="w-4/5 md:w-1/2 flex justify-center">
            <img
              className="mt-6 md:mt-auto object-scale-down"
              src="/img/7.png"
              alt="Ako Karimi"
            />
          </div>
        </div>
        <div className="icon-scroll absolute bottom-0 right-1/2 w-6 md:w-7 h-10 md:h-12"></div>
      </section>
    </>
  );
};

export default Hero;
