import React from "react";

function Projects() {
  return (
    <section className="bg-light2">
      <div
        id="projects"
        className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-14 gap-2"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl text-dark1 font-bold pb-12">
          My Projects...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2">
          <div className="grid grid-rows-[96px_1fr] gap-5 w-72 justify-items-center border border-gray-200 rounded-2xl shadow-2xl p-4 bg-white hover:scale-[1.025] transition duration-200">
            <svg className="w-48">
              <use xlinkHref="img/svg-icons.svg#digikala"></use>
            </svg>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">Name:</p>
                <p className="text-dark2">DigiKala Clone</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">
                  Languages and Platforms Used:
                </p>
                <p className="text-dark2">React, NodeJs, Express, MongoDB</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">Features:</p>
                <p className="text-dark2">
                  Filtering Products,
                  <br />
                  Signing Up With Email,
                  <br />
                  Adding comments to Products...
                </p>
              </div>
            </div>
            <div className="my-8 text-dark1 border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500">
              More info
            </div>
          </div>
          <div className="grid grid-rows-[96px_1fr] gap-0 w-72 justify-items-center border border-gray-200 rounded-2xl shadow-2xl p-4 bg-white hover:scale-[1.025] transition duration-200">
            <div className="flex items-center justify=center gap-1">
              <embed src="img/snow.svg" />
              <embed src="img/clear.svg" />
              <embed src="img/night.svg" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">Name:</p>
                <p className="text-dark2">Weather web app</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">
                  Languages and Platforms Used:
                </p>
                <p className="text-dark2">HTML, CSS, JavaScript</p>
              </div>
              <div className="flex flex-col gap-1 text-center">
                <p className="font-bold text-dark1 mb-2 mt-4">Features:</p>
                <p className="text-dark2">
                  Searching by city,
                  <br />
                  12 hours forecas,
                  <br />3 days forecast...
                </p>
              </div>
            </div>
            <div className="my-8 text-dark1 border-2 border-primary w-36 md:w-40 py-2 px-6 md:px-8 text-center shadow-md rounded-3xl hover:bg-primary hover:text-white hover:border-primary transition duration-500 pointer">
              More info
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
