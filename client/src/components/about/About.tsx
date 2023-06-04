import React from "react";

const About = () => {
  return (
    <div id="about" className="container mx-auto pt-12 md:pt-28 md:pt-15 gap-2">
      <p className="text-3xl md:text-4xl lg:text-5xl text-textColor font-bold">
        About me...
      </p>
      <div className="flex flex-col md:flex-row gap-16 w-full mt-8">
        <div className="md:w-1/2">
          <p className=" text-textColor ">
            My name is Ako Karimi. I am a junior full stack web developer with
            over 1 year of exprience. I am passionate about creating
            user-friendly and visually appealing websites that provide an
            exceptional user experience. I have a strong foundation in HTML,
            CSS, JavaScript, and various front-end frameworks such as React,
            Tailwind CSS. Additionally, I have experience working with back-end
            technologies such as Node.js, Express.js, and MongoDB.
            <br />
            <br />I enjoy exploring new technologies, attending tech meetups,
            and contributing to open-source projects. I am a team player who
            enjoys collaborating with others to achieve common goals.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 ">
          <div className="text-textColor grid grid-cols-2 gap-2 auto-cols-min ">
            <p className="font-bold">Age:</p>
            <p className="">31</p>
            <p className="font-bold">Residence:</p>
            <p className="">Iran</p>
            <p className="font-bold">Address:</p>
            <p className="">Sanandaj</p>
          </div>
          <div className="text-textColor grid grid-cols-2 gap-2 auto-cols-min ">
            <p className="font-bold">Freelance:</p>
            <p className="">Available</p>
            <p className="font-bold">Phone:</p>
            <p className="">+98 918 998 1472</p>
            <p className="font-bold">Email:</p>
            <p className="">ako.karimii@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
