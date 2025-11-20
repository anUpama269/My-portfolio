import React, { useState } from "react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Waves from './components/Waves';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Qualifications from "./components/Qualifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [animateAbout, setAnimateAbout] = useState(false);

  return (
    <div className="App">
      {/* Background waves */}
      <Waves
        lineColor="#0d3010"
        backgroundColor="rgba(145, 136, 136, 0.49)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
        className="absolute top-0 left-0 w-full h-full -z-10"
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero section */}
      <Hero onAboutClick={() => setAnimateAbout(true)} />

      {/* About section */}
      <About triggerAnimation={animateAbout} />

      {/* Skills section */}
      <Skills />

      {/* Projects section */}
      <Projects />
      <Qualifications/>
      <Contact/>
      <Footer/>
     
    </div>
  );
}

export default App;
