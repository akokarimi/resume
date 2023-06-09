import { useInView } from "react-intersection-observer";
import React from "react";

const Skills = () => {
  const [ref, inView] = useInView();
  return (
    <section id="skills" className="bg-light1 dark:bg-dark h-[100vh]">
      <div className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-14 gap-2 ">
        <p className="text-xl md:text-4xl lg:text-5xl text-dark1 dark:text-light1 font-bold pb-12">
          My Skills...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 justify-between">
          <div className="flex flex-row items-center gap-2">
            <div ref={ref}>
              <svg className="h-8 w-8  text-center object-scale-down">
                <use
                  className="object-scale-down"
                  xlinkHref="img/svg-icons.svg#html5"
                ></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 dark:text-light1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['85%'] before:text-right before:bg-primary before:h-full before:rounded-lg before:text-white before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center">
                <use xlinkHref="img/svg-icons.svg#css3"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['85%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>

          <div className="flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center object-scale-down">
                <use
                  className="object-scale-down"
                  xlinkHref="img/svg-icons.svg#tailwind"
                ></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[85%] before:inline-block before:content-['85%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center">
                <use xlinkHref="img/svg-icons.svg#javascript"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[75%] before:inline-block before:content-['75%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center">
                <use xlinkHref="img/svg-icons.svg#react"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[75%] before:inline-block before:content-['75%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center">
                <use xlinkHref="img/svg-icons.svg#nodejs"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['70%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8 text-center dark:stroke-light1">
                <use xlinkHref="img/svg-icons.svg#express"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['70%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
          <div className=" flex flex-row items-center gap-2">
            <div>
              <svg className="h-8 w-8  text-center">
                <use xlinkHref="img/svg-icons.svg#mongodb"></use>
              </svg>
            </div>
            <div
              className={`text-sm text-dark1 my-2 before:indent-1 w-full outline-1 outline-gray-400 bg-gray-100 rounded-lg outline
              before:w-[70%] before:inline-block before:content-['70%'] before:bg-primary before:h-full before:rounded-lg before:text-white before:text-right before:pr-1 ${
                inView ? "before:animate-[fill_2s_0s]" : "before:animate-none"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
