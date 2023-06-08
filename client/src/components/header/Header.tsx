import { useInView } from "react-intersection-observer";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className={`top-0 left-0 flex items-center justify-between w-screen container pt-1 bg-color-none mb-2 transition-all duration-1000 ${
        inView ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <img
        className="w-24 z-0 md:w-36 bg-color-dark1 hover:scale-110 transition duration-100 dark:invert"
        src="/img/2.png"
        alt="akokarimi"
      />
      <Navbar />
    </section>
  );
};

export default Header;
