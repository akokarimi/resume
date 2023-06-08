import { useState, useEffect } from "react";
import DarkModeContext from "./context/DarkContext";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import NavModal from "./components/navbar/NavModal";
import Contacts from "./components/hero/Contacts";
import Projects from "./components/portfolio/Projects";
import ContactMe from "./components/contact/ContactMe";

const loadingDiv = document.getElementById("loading-img");

function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      loadingDiv?.remove();
    }, 3000);
  }, []);

  let [darkMode, setDarkMode] = useState(false);

  return (
    <>
      {!isLoading && (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
          <div className={`main w-full bg-light1  ${darkMode ? "dark" : ""}`}>
            <NavModal />
            <Contacts />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <ContactMe />
          </div>
        </DarkModeContext.Provider>
      )}
    </>
  );
}

export default App;
