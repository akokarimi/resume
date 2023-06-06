import React from "react";

const Skills = () => {
  return (
    <section className="bg-light1">
      <div className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-14 gap-2 ">
        <p className="text-3xl md:text-4xl lg:text-5xl text-dark1 font-bold pb-12">
          My Skils
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 justify-between">
          <div className="flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center object-scale-down">
                <use
                  className="object-scale-down"
                  xlinkHref="img/svg-icons.svg#html5"
                ></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['HTML5'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              85%
            </div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#css3"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['CSS3'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              85%
            </div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center object-scale-down">
                <use
                  className="object-scale-down"
                  xlinkHref="img/svg-icons.svg#tailwind"
                ></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['Tailwind'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              85%
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#javascript"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[75%] before:inline-block before:content-['JavaScript'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              75%
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#react"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[75%] before:inline-block before:content-['React'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              75%
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#nodejs"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['NodeJs'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              70%
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#express"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['Express'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              70%
            </div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-12 w-12  text-center">
                <use xlinkHref="img/svg-icons.svg#mongodb"></use>
              </svg>
            </div>
            <div
              className="text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['MongoDB'] before:bg-primary before:animate-[fill_2s_0s] before:h-full before:rounded-lg before:text-white"
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
