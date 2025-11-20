import React, { useRef, useEffect } from "react";
import "./About.css";

const About = () => {
  const aboutRef = useRef(null);

  // Function to trigger animations
  const triggerAnimations = () => {
    const el = aboutRef.current;
    if (!el) return;

    // Heading ripple
    const heading = el.querySelector(".about-heading");
    heading.classList.remove("ripple");
    void heading.offsetWidth; // restart animation
    heading.classList.add("ripple");

    // Cards animation
    const cards = el.querySelectorAll(".about-box");
    cards.forEach((card, i) => {
      card.classList.remove("fade-slide");
      void card.offsetWidth;
      setTimeout(() => {
        card.classList.add("fade-slide");
      }, i * 200);
    });

    // Skill bars
    const fills = el.querySelectorAll(".fill");
    fills.forEach((fill) => {
      fill.style.width = "0";
      setTimeout(() => {
        fill.style.width = fill.dataset.width;
      }, 400);
    });

    // Button animation
    const btn = el.querySelector(".about-btn");
    btn.classList.remove("bounce");
    void btn.offsetWidth;
    btn.classList.add("bounce");
  };

  // Observe visibility
  useEffect(() => {
    const el = aboutRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          triggerAnimations();
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollToSkills = () => {
    const skills = document.getElementById("skills");
    if (skills) skills.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" ref={aboutRef} className="about-section">
      {/* Cosmic Background */}
      <div className="stars-layer"></div>
      <div className="orbits-layer"></div>
      <div className="meteors-layer"></div>

      {/* Heading */}
      <h1 className="about-heading ripple">About Me</h1>

      {/* Cards */}
      <div className="about-cards">
        <div className="about-box">
          <h2>Who I Am</h2>
          <p>
            I'm <span>Anupama</span>, a passionate Python Fullstack Developer skilled in Django and modern web technologies.
          </p>
        </div>

        <div className="about-box">
          <h2>What I Do</h2>
          <p>
            I build <span>responsive</span> and <span>intuitive</span> web applications. I love solving challenging problems.
          </p>
        </div>
      </div>

      {/* Skill Bars */}
      <div className="skill-bars">
        <div className="skill">
          <span>Python</span>
          <div className="progress"><div className="fill python" data-width="90%"></div></div>
        </div>
        <div className="skill">
          <span>Django</span>
          <div className="progress"><div className="fill django" data-width="85%"></div></div>
        </div>
        <div className="skill">
          <span>React</span>
          <div className="progress"><div className="fill react" data-width="80%"></div></div>
        </div>
      </div>

      {/* Button */}
      <button className="about-btn bounce" onClick={scrollToSkills}>
        ↓ Scroll to Skills ↓
      </button>
    </section>
  );
};

export default About;
