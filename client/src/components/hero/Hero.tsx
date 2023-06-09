import { useInView } from "react-intersection-observer";

import Header from "../header/Header";

const Hero = () => {
  const [ref, inView] = useInView();

  return (
    <>
      <section
        ref={ref}
        id="home"
        className="bg-light1 h-screen transition duration-1000 dark:bg-dark overflow-x-hidden"
      >
        <Header />

        <div className="flex flex-col-reverse md:flex-row justify-between items-center container mx-auto pt-8 gap-2">
          <div
            className={`text-center md:text-left md:w-1/2 flex items-center md:items-start flex-col gap-6 transition-all duration-1000 ${
              inView ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <p className="mt-8 text-2xl md:text-4xl lg:text-5xl text-dark1 dark:text-light1 font-bold">
              Hi, I'm Ako Karimi
            </p>

            <p className="text-sm md:text-2xl text-dark2 dark:text-light2">
              I'm an Enthusiastic Full Stack Web Developer, Based in Sanandaj,
              Iran.
            </p>
            <a
              onClick={() => {
                document
                  .getElementById("contactme")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              href="#contact"
              className="text-sm md:text-md text-dark1 bg-white border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500 dark:bg-dark1 dark:text-light1 dark:hover:bg-primary "
            >
              Contact me
            </a>
          </div>

          <div className="w-4/5 md:w-1/2 flex justify-center">
            <img
              className={`mt-6 md:mt-auto object-scale-down transition-all duration-1000 ${
                inView ? "translate-x-0" : "translate-x-full"
              }`}
              src="/img/1.png"
              alt="Ako Karimi"
            />
          </div>
        </div>
        <div
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="icon-scroll absolute bottom-0 right-1/2 w-6 md:w-7 h-10 md:h-12"
        ></div>
      </section>
    </>
  );
};

export default Hero;
