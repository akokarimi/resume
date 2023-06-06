import React from "react";

const About = () => {
  return (
    <section className="bg-light2">
      <div
        id="about"
        className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-20  gap-2"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-dark1 font-bold pb-12">
          About me...
        </p>
        <div className="flex flex-col md:grid md:grid-cols-[3fr_1px_2fr] gap-8 w-full ">
          <div className="">
            <p className=" text-dark2 ">
              My name is Ako Karimi. I am a junior full stack web developer with
              over 1 year of exprience. I have a strong foundation in HTML, CSS,
              JavaScript, and various front-end frameworks such as React,
              Tailwind CSS. Additionally, I have experience working with
              back-end technologies such as Node.js, Express.js, and MongoDB.
              <br />
              <br />I enjoy exploring new technologies, attending tech meetups,
              and contributing to open-source projects. I am a team player who
              enjoys collaborating with others to achieve common goals.
            </p>
          </div>
          <div className="bg-dark1"></div>

          <div className="text-dark1 grid grid-cols-[1fr_2fr] gap-4 justify-start border border-gray-200 rounded-2xl shadow-2xl p-4 bg-white">
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-user"></use>
              </svg>
              Age:
            </p>
            <p className="text-dark2">31</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-home"></use>
              </svg>
              Country:
            </p>
            <p className="text-dark2">Iran</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-location2"></use>
              </svg>
              Address:
            </p>
            <p className="text-dark2">Sanandaj</p>

            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-mobile2"></use>
              </svg>
              Phone:
            </p>
            <p className="text-dark2">+989189981472</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-home"></use>
              </svg>
              Email:
            </p>
            <p className="text-dark2">ako.karimii@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
