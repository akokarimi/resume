import { useInView } from "react-intersection-observer";

function Projects() {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();
  return (
    <section
      id="projects"
      className="bg-light2 dark:bg-dark1 overflow-x-hidden"
    >
      <div className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-14 gap-2">
        <p className="text-xl md:text-4xl lg:text-5xl text-dark1 dark:text-light1 font-bold pb-12">
          My Projects...
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-16 text-sm md:text-md">
          <div
            ref={ref1}
            className={`relative overflow-hidden grid grid-rows-[96px_1fr] gap-5 w-56 xs:w-72 h-[610px] justify-items-center border border-gray-200 dark:border-none rounded-2xl shadow-2xl p-4 bg-white dark:bg-dark hover:scale-[1.025]
            transition-all duration-1000 ${inView1 ? "opacity-1" : "opacity-0"}
          `}
          >
            <div className="absolute -left-10 top-8 w-44 bg-primary h-7 overflow-hidden -rotate-45 text-white text-center text-xs pt-1">
              {" "}
              Under Development
            </div>
            <img
              src="/img/haylo.png"
              className="max-w-[8rem] max-h-[8rem] dark:invert"
              alt="haylo logo"
            />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Name:
                </p>
                <p className="text-dark2 dark:text-light2">Haylo Flower Shop</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Languages and Platforms Used:
                </p>
                <p className="text-dark2 dark:text-light2">
                  NextJs, TypeScript, MongoDB
                </p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Features:
                </p>
                <p className="text-dark2 dark:text-light2">
                  Signing Up With Email,
                  <br />
                  Adding products to cart,
                </p>
              </div>
            </div>
            <a
              href="https://haylo.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="my-8 text-dark1 dark:text-light1 border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500"
            >
              Visit Website
            </a>
          </div>
          <div
            ref={ref2}
            className={`grid grid-rows-[96px_1fr] gap-5 w-56 xs:w-72 h-[610px] justify-items-center border border-gray-200 dark:border-none rounded-2xl shadow-2xl p-4 bg-white dark:bg-dark hover:scale-[1.025]
            transition-all duration-1000 ${inView2 ? "opacity-1" : "opacity-0"}
          `}
          >
            <svg className="w-48">
              <use xlinkHref="img/svg-icons.svg#digikala"></use>
            </svg>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Name:
                </p>
                <p className="text-dark2 dark:text-light2">DigiKala Clone</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Languages and Platforms Used:
                </p>
                <p className="text-dark2 dark:text-light2">
                  React, NodeJs, Express, MongoDB
                </p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Features:
                </p>
                <p className="text-dark2 dark:text-light2">
                  Filtering Products,
                  <br />
                  Signing Up With Email,
                  <br />
                  Adding comments to Products...
                </p>
              </div>
            </div>
            <a
              href="https://github.com/akokarimi/digikala-react"
              target="_blank"
              rel="noreferrer"
              className="my-8 text-dark1 dark:text-light1 border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500"
            >
              More info
            </a>
          </div>
          <div
            ref={ref3}
            className={`grid grid-rows-[96px_1fr] gap-0 w-56 xs:w-72 h-[610px] justify-items-center border border-gray-200 dark:border-none rounded-2xl shadow-2xl p-4 bg-white dark:bg-dark hover:scale-[1.025] transition-all duration-1000 ${
              inView3 ? "opacity-1" : "opacity-0"
            }
          `}
          >
            <div className="flex items-center justify=center gap-1">
              <embed src="img/snow.svg" />
              <embed src="img/clear.svg" />
              <embed src="img/night.svg" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Name:
                </p>
                <p className="text-dark2 dark:text-light2">Weather web app</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Languages and Platforms Used:
                </p>
                <p className="text-dark2 dark:text-light2">
                  HTML, CSS, JavaScript
                </p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 dark:text-light1 mb-2 mt-4">
                  Features:
                </p>
                <p className="text-dark2 dark:text-light2">
                  Searching by city,
                  <br />
                  12 hours forecas,
                  <br />3 days forecast...
                </p>
              </div>
            </div>
            <a
              href="https://weather-app-ako.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="my-8 text-dark1 dark:text-light1 border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500 pointer"
            >
              More info
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
