import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-[80px]">
        <main className="max-w-7xl mx-auto">
          <Hero />
          <div className="relative z-10">
            <About />
          </div>
          <div className="relative z-10">
            <Projects />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
