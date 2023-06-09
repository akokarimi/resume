import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <section className="bg-light2 dark:bg-dark1 overflow-x-hidden min-h-[100vh] md:min-h-[auto]">
      <div
        id="about"
        className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-20 gap-2 
        transition-all duration-1000"
      >
        <p
          ref={ref}
          className={`text-xl md:text-4xl lg:text-5xl text-dark1 dark:text-light1 font-bold pb-12 transition-all duration-1000 ${
            inView ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          About me...
        </p>
        <div className="flex flex-col md:grid md:grid-cols-[3fr_1px_2fr] gap-8 w-full ">
          <div className="">
            <p
              className={`text-xs xs:text-sm text-dark2 dark:text-light2 transition-all duration-1000 ${
                inView ? "opacity-1" : "opacity-0"
              } `}
            >
              My name is Ako Karimi. I am a junior front-end web developer with
              over 1 year of exprience. I have a strong foundation in HTML, CSS,
              JavaScript, and various front-end frameworks such as React and
              Tailwind CSS. Additionally, I have experience working with
              back-end technologies such as Node.js, Express.js, and MongoDB.
              <br />
              <br />I enjoy working on big projects, trying new technologies and
              platforms, and contributing to open-source projects. I am a team
              player who enjoys collaborating with others to achieve common
              goals.
            </p>
          </div>
          <div className="bg-dark1 dark:bg-light1"></div>

          <div
            ref={ref2}
            className={`text-xs xs:text-sm md:text-md text-dark1 dark:text-light1 grid grid-cols-[1fr_2fr] gap-4 justify-start border border-gray-200 dark:border-none rounded-2xl shadow-2xl p-4 bg-white dark:bg-dark transition-all duration-1000 ${
              inView2 ? "opacity-1 translate-x-0" : "translate-x-full opacity-0"
            }`}
          >
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-user"></use>
              </svg>
              Age:
            </p>
            <p className="text-dark2 dark:text-light2">31</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-home"></use>
              </svg>
              Country:
            </p>
            <p className="text-dark2 dark:text-light2">Iran</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-location2"></use>
              </svg>
              Address:
            </p>
            <p className="text-dark2 dark:text-light2">Sanandaj</p>

            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-mobile2"></use>
              </svg>
              Phone:
            </p>
            <p className="text-dark2 dark:text-light2">+98*******2</p>
            <p className="font-bold flex gap-1 items-center">
              <svg className="w-6 h-4 md:w-6 fill-primary">
                <use xlinkHref="img/svg-icons.svg#icon-home"></use>
              </svg>
              Email:
            </p>
            <p className="text-dark2 dark:text-light2 col-span-2 xs:col-span-1 justify-self-center xs:justify-self-auto">
              ako.karimii@gmail.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
