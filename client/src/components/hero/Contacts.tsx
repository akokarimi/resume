import React from "react";

function Contacts() {
  return (
    <div className="fixed z-10 tranform -translate-y-1/2  top-1/2 right-0 flex flex-col items-center p-1 gap-4 bg-light1 shadow-lg rounded-lg">
      <a
        href="https://www.instagram.com/akoo0o"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:scale-125 transition duration-100 fill-dark1">
          <use xlinkHref="img/svg-icons.svg#icon-instagram"></use>
        </svg>
      </a>
      <a
        href="https://www.twitter.com/ako_mountaintop"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:scale-125 transition duration-100 fill-dark1">
          <use xlinkHref="img/svg-icons.svg#icon-twitter"></use>
        </svg>
      </a>
      <a
        href="https://www.linkedin.com/in/ako-karimi-84a446264"
        target="_blank"
        rel="noreferrer noopener"
      >
        <svg className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 hover:scale-125 transition duration-100 fill-dark1">
          <use xlinkHref="img/svg-icons.svg#icon-linkedin2"></use>
        </svg>
      </a>
    </div>
  );
}

export default Contacts;
