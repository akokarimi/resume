import React from "react";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import NavModal from "./components/navbar/NavModal";
import Contacts from "./components/hero/Contacts";
import Projects from "./components/portfolio/Projects";

function App() {
  return (
    <div className="main w-full">
      <NavModal />
      <Contacts />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <br />
      <br />
    </div>
  );
}

export default App;
