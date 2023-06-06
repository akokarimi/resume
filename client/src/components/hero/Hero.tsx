import React from "react";
import Header from "../header/Header";
import Contacts from "./Contacts";

const Hero = () => {
  return (
    <>
      <section className="bg-light1 h-screen">
        <Header />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center container mx-auto pt-8 gap-2">
          <div className="text-center md:text-left md:w-1/2 flex items-center md:items-start flex-col gap-8">
            <p className="text-3xl md:text-4xl lg:text-5xl text-dark1 font-bold">
              Hi, I'm Ako Karimi
            </p>
            <p className="text-md md:text-2xl text-dark2">
              I'm an Enthusiastic Full Stack Web Developer, Based in Sanandaj,
              Iran.
            </p>
            <a
              href="#contact"
              className="text-dark1 bg-white border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500 "
            >
              Contact me
            </a>
          </div>

          <div className="w-4/5 md:w-1/2 flex justify-center">
            <img
              className="mt-6 md:mt-auto object-scale-down"
              src="/img/1.png"
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
