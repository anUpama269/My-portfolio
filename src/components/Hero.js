import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import myPhoto from "../asset/anupama.JPG";
import "./Hero.css";

const Hero = () => {
  const [titleJoined, setTitleJoined] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setTitleJoined(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero-container upgraded-hero">
      {/* Galaxy Background */}
      <div className="pinwheel"></div>
      <div className="pinwheel-layer"></div>

      {/* Floating Particles */}
      <div className="floating-stars"></div>

      {/* Hero Content */}
      <div className="hero-content">
        {/* Text Section */}
        <div className="text-section">
          {/* Split Main Title */}
          <div
            className={`hero-title-wrapper emphasized-title ${titleJoined ? "animate-flicker" : ""}`}
          >
            <motion.h1
              className="hero-title-left neon-blue split-left"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Hi, I'm
            </motion.h1>

            <motion.h1
              className="hero-title-right neon-pink split-right"
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              Anupama
            </motion.h1>
          </div>

          {/* Subcontent */}
          {titleJoined && (
            <motion.div
              className="subcontent-wrapper early-fade"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="subcontent-inner glass-bg">
                <p>Python Fullstack Developer</p>
                <p>Crafting elegant and immersive digital experiences.</p>
                <p>Specialized in Django, React, REST APIs & UI animations.</p>
                <p>Clean, scalable & maintainable code.</p>
                <p>Tech enthusiast & problem solver.</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Cinematic Floating Photo */}
        <motion.div
          className="photo-section"
          initial={{ opacity: 0, scale: 0.7, rotateY: 60 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
        >
          <motion.img
            src={myPhoto}
            alt="Anupama"
            className="hero-photo cinematic-photo"
            animate={{
              y: [0, -25, 0],
              rotate: [0, 3, -3, 0],
              boxShadow: [
                "0 0 25px rgba(255,255,255,0.4)",
                "0 0 45px rgba(255,0,255,0.5)",
                "0 0 30px rgba(0,255,255,0.5)",
              ],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>

      {/* Waves */}
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      {/* Scroll Button */}
      <motion.button
        className="scroll-btn neon-button"
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        ↓ About Me
      </motion.button>
    </section>
  );
};

export default Hero;
