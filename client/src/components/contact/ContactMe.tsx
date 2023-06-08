import React from "react";

const ContactMe = () => {
  return (
    <section id="contactme" className="bg-light1 dark:bg-dark">
      <div className="container mx-auto pt-20 pb-16 md:pt-24 md:pb-14 gap-2 ">
        <p className="text-xl md:text-4xl lg:text-5xl text-dark1 dark:text-light1 font-bold pb-12">
          Contact Me
        </p>
        <div className="text-sm md:text-md text-dark1 dark:text-light1 grid grid-cols-[1fr_2fr] gap-4 justify-start border border-gray-200 dark:border-none rounded-2xl shadow-2xl p-4 bg-white dark:bg-dark1">
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#icon-mobile2"></use>
            </svg>
            Phone:
          </p>
          <p className="text-dark2 dark:text-light2">+989189981472</p>
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#icon-mail2"></use>
            </svg>
            Email:
          </p>
          <p className="text-dark2 dark:text-light2">ako.karimii@gmail.com</p>
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#icon-instagram"></use>
            </svg>
            Instagram:
          </p>
          <p className="text-dark2 dark:text-light2">@akoo0o</p>
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#icon-linkedin2"></use>
            </svg>
            LinkedIn:
          </p>
          <p className="text-dark2 dark:text-light2">ako-karimi</p>
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#icon-twitter"></use>
            </svg>
            Twitter:
          </p>
          <p className="text-dark2 dark:text-light2">ako_mountaintop</p>
          <p className="font-bold flex gap-1 items-center">
            <svg className="w-6 h-4 md:w-6 fill-primary">
              <use xlinkHref="img/svg-icons.svg#github"></use>
            </svg>
            Github:
          </p>
          <p className="text-dark2 dark:text-light2">github.com/akokarimi</p>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
