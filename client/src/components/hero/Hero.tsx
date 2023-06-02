import React from "react";
import Header from "../header/Header";
const Hero = () => {
  return (
    <>
      <section
        className="bg-gradient-to-b md:bg-gradient-to-r from-primaryLight via-white to-secondaryLight
      h-screen"
      >
        {/* Header Sectoin */}
        <Header />
        {/* Hero Section */}
        <div className="flex justify-between items-center container mx-auto pt-5 gap-2">
          <div className="w-1/2 flex flex-col gap-8">
            <p className=" text-6xl text-textColor font-bold">
              Hi, I'm Ako Karimi
            </p>
            <p className=" text-2xl text-textColor">
              I'm an enthusiastic Full Stack Web Developer, based in Sanandaj,
              Iran.
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <img className="w-full" src="/img/7.png" alt="Ako Karimi" />
          </div>
        </div>
        <div className="icon-scroll"></div>
        {/* <svg className="w-full fill-black stroke-black">
          <use xlinkHref="/img/svg-icons.svg#scroll" />
        </svg> */}
      </section>
    </>
  );
};

export default Hero;
